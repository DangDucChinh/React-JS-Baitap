import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishDetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {connect} from 'react-redux';


const mapStateToProps = state =>{
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotion : state.promotion,
        leaders: state.leaders
    }
}

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {

        const HomePage = ()=>{
            return(
                <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
                promotion={this.props.promotion.filter((promotion)=>promotion.featured)[0]}
                leaders={this.props.leaders.filter((leaders)=>leaders.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
           
            return(
                <DishDetailComponent dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                   comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };

        return (
            <div>
                
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route 
                        exact 
                        path='/menu' 
                        component={ ()=><MenuComponent dishes={this.props.dishes} /> } />
                    <Route 
                        exact
                        path='/contactus'
                        component={Contact} /> 
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

export default withRouter((connect(mapStateToProps)(MainComponent))) ; 
