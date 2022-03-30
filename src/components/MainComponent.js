import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import {STAFFS, DEPARTMENTS} from '../shared/staffs';
import DishDetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';


class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }
        this.addStaff = this.addStaff.bind(this) ;
    }
    addStaff = (staff)=>{
        const id=Math.floor(Math.random() * 10000 + 1);
        const newStaff = {id, ...staff};
        this.setState({
            staffs: [...this.state.staffs, newStaff]
        });
    }
    render() {

        const HomePage = ()=>{
            return(
                <Home />
            );
        }
        const StaffWithId = ({match}) => {
            return(
                <DishDetailComponent staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
            );
        };
        return (
            <div> 
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route 
                        exact 
                        path='/nhanvien'  // menu
                        component={ ()=><MenuComponent onAdd={this.addStaff} staffs={this.state.staffs} /> } />
                    <Route 
                        exact
                        path='/phongban' // contactus
                        component={()=> <Contact departments={this.state.departments} /> } />
                    <Route path='/nhanvien/:staffId' component={StaffWithId} />
                    <Route 
                        exact
                        path='/tienluong' // aboutus
                        component={()=> <About staffs={this.state.staffs} /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />   
            </div>
        );
    }
}

export default MainComponent;
