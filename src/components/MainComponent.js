import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Contact2 from './Contact2';
import About from './AboutComponent';
import {connect} from 'react-redux';
import Header2 from './Header2';

import { addComment, fetchDishes } from '../redux/ActionCreator';
import DishDetail2 from './DishDetail2';

const mapStateToProps = state =>{
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotion : state.promotion,
        leaders: state.leaders
    }
}

// const mapDispatchToProps = (dispatch)=>({
//     addComment: (dishId, rating, author, comment)=> 
//     dispatch(addComment(dishId, rating, author, comment))
// })
const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: ()=>{
        dispatch(fetchDishes())
    }
  });

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchDishes() ;

    }


    render() {

        const HomePage = ()=>{
            return(
                <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
                dishesLoading = {this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}

                promotion={this.props.promotion.filter((promotion)=>promotion.featured)[0]}
                leaders={this.props.leaders.filter((leaders)=>leaders.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
           
            return(
                // <DishDetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                //    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
                //    addComment={this.props.addComment}/>
                <DishDetail2 dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
                addComment={this.props.addComment}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}/>
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
                        component={ ()=><MenuComponent dishes={this.props.dishes} /> } />
                    <Route 
                        exact
                        path='/contactus'
                        component={Contact2} /> 
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route 
                        exact
                        path='/aboutus'
                        component={()=> <About leaders={this.props.leaders} /> } />

                    <Redirect to='/home' />
                    {/* Mặc định Direct */}
                </Switch>
                <Footer />   
            </div>
        );
    }
}

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(MainComponent))) ; 
