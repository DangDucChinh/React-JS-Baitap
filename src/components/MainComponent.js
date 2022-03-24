import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import {COMMENTS} from '../shared/comments';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';
import DishDetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactComponent';


class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES, // thằng này để hiện thị menu 
            // selectedDish: null // thằng này dùng để hiện thị món ăn được chọn qua props , cụ thể ở đây thì nó truyền ID dish
            comments: COMMENTS , 
            promotion: PROMOTIONS , 
            leaders: LEADERS ,
        }
        
    }

    // setStateSelect(dishId){
    //     this.setState({ selectedDish: dishId });
    // }

    render() {

        const HomePage = ()=>{
            return(
                <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                promotion={this.state.promotion.filter((promotion)=>promotion.featured)[0]}
                leaders={this.state.leaders.filter((leaders)=>leaders.featured)[0]}
                />
            );
        }

        return (
            <div>
                
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route 
                        exact 
                        path='/menu' 
                        component={ ()=><MenuComponent dishes={this.state.dishes} /> } />
                    <Route 
                        exact
                        path='/contactus'
                        component={Contact} /> 
                    <Redirect to='/home' />
                    {/* Mặc định Direct */}
                </Switch>
                <Footer />   
            </div>
        );
    }
}

export default MainComponent;
