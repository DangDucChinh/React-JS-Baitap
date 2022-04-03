import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact2 from './Contact2';
import About from './AboutComponent';
import { connect } from 'react-redux';
import Header2 from './Header2';

import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreator';
import DishDetail2 from './DishDetail2';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}



const mapDispatchToProps = dispatch => ({
    // addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    // resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos())
});

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }


    render() {

        const HomePage = () => {

            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {

            return (
                // <DishDetail2 dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                // comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
                // addComment={this.props.addComment}
                // isLoading={this.props.dishes.isLoading}
                // errMess={this.props.dishes.errMess}/>
                <DishDetail2 dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />
            );
        };

        return (
            <div>
                {/* <Header /> */}
                <Header2 />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route
                        exact
                        path='/menu'
                        component={() => <MenuComponent dishes={this.props.dishes} />} />
                    <Route
                        exact
                        path='/contactus'
                        component={Contact2} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route
                        exact
                        path='/aboutus'
                        component={() => <About leaders={this.props.leaders} />} />

                    <Redirect to='/home' />
                    {/* Mặc định Direct */}
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(MainComponent))); 