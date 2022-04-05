// import React, { Component } from 'react';
// import MenuComponent from './MenuComponent';
// import {STAFFS, DEPARTMENTS} from '../shared/staffs';
// import DishDetailComponent from './DishdetailComponent';
// import Header from './HeaderComponent';
// import Footer from './FooterComponent';
// import Home from './HomeComponent';
// import {Switch, Route, Redirect} from 'react-router-dom';
// import Contact from './ContactComponent';
// import About from './AboutComponent';


// class MainComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             staffs: STAFFS,
//             departments: DEPARTMENTS
//         }
//         this.addStaff = this.addStaff.bind(this) ;
//     }
//     addStaff = (staff)=>{
//         const id=Math.floor(Math.random() * 10000 + 1);
//         const newStaff = {id, ...staff};
//         this.setState({
//             staffs: [...this.state.staffs, newStaff]
//         });
//     }
//     render() {

//         const HomePage = ()=>{
//             return(
//                 <Home />
//             );
//         }
//         const StaffWithId = ({match}) => {
//             return(
//                 <DishDetailComponent staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
//             );
//         };
//         return (
//             <div> 
//                 <Header />
//                 <Switch>
//                     <Route path='/home' component={HomePage} />
//                     <Route 
//                         exact 
//                         path='/nhanvien'  // menu
//                         component={ ()=><MenuComponent onAdd={this.addStaff} staffs={this.state.staffs} /> } />
//                     <Route 
//                         exact
//                         path='/phongban' // contactus
//                         component={()=> <Contact departments={this.state.departments} /> } />
//                     <Route path='/nhanvien/:staffId' component={StaffWithId} />
//                     <Route 
//                         exact
//                         path='/tienluong' // aboutus
//                         component={()=> <About staffs={this.state.staffs} /> } />
//                     <Redirect to='/home' />
//                 </Switch>
//                 <Footer />   
//             </div>
//         );
//     }
// }

// export default MainComponent;

//import React, {Component} from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import StaffDetail from './DishdetailComponent';
import Department from './DepartmentComponent';
import Salary from './SalaryComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStaffs, fetchDepartments, postStaffs, deleteStaff, PatchStaffs, fetchsalary } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Component } from 'react';
import Home from './HomeComponent';



const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments,
        salary: state.salary
    }
}
const mapDispatchToProps = dispatch => ({
    fetchStaffs: () => { dispatch(fetchStaffs()) },
    fetchDepartments: () => { dispatch(fetchDepartments()) },
    postStaffs: (name, doB, startDate, departmentId, salaryScale, overTime, annualLeave) => dispatch(postStaffs(name, doB, startDate, departmentId, salaryScale, overTime, annualLeave)),
    deleteStaff: (id) => { dispatch(deleteStaff(id)) },
    PatchStaffs: (Staff) => { dispatch(PatchStaffs(Staff)) },
    fetchsalary: () => { dispatch(fetchsalary()) }

});

class Main extends Component {
    componentDidMount() {  // chạy khi render lần đầu tiên 
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchsalary();
    }


    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }


        const staffsWithId = ({ match }) => {
            const staff = this.props.staffs.staffs.filter((staffs) => staffs.id === parseInt(match.params.staffsId, 10))[0];
            if (staff != null)
                return (
                    <StaffDetail staff={staff}
                        department={this.props.departments.departments}
                        deleteStaff={this.props.deleteStaff}
                        PatchStaffs={this.props.PatchStaffs}
                        isLoading={this.props.staffs.isLoading}
                        errMess={this.props.staffs.errMess}
                    />
                );
            else
                return (<Menu staffs={this.props.staffs.staffs}
                    postStaffs={this.props.postStaffs}
                    dishesLoading={this.props.staffs.isLoading}
                    dishesErrMess={this.props.staffs.errMess}
                />)
        };

        const DepartmentwId = ({ match }) => {
            const department = this.props.departments.departments.filter((department) => department.name === match.params.departmentId)[0];
            const staffs = this.props.staffs.staffs.filter((staffs) => staffs.departmentId === department?.id);
            if (department != null)
                return (
                    <Menu staffs={staffs}
                        postStaffs={this.props.postStaffs}
                        dishesLoading={this.props.staffs.isLoading}
                        dishesErrMess={this.props.staffs.errMess}
                        department={department}
                    />);
            else
                return (
                    <Menu staffs={this.props.staffs.staffs}
                        postStaffs={this.props.postStaffs}
                        staffsLoading={this.props.staffs.isLoading}
                        staffsErrMess={this.props.staffs.errMess}
                    />
                )
        }


        return (
            <div className="App">
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route  exact path='/home' component={HomePage} />
                            <Route exact path='/menu' component={() => <Menu staffs={this.props.staffs.staffs} 
                            postStaffs={this.props.postStaffs} staffsLoading={this.props.staffs.isLoading}
                                staffsErrMess={this.props.staffs.errMess} />} />
                            <Route path='/menu/:staffsId' component={staffsWithId} />
                            <Route exact path='/department' component={() => <Department department={this.props.departments.departments} />} />
                            <Route path='/department/:departmentId' component={DepartmentwId} />
                            <Route exact path='/salary' component={() => <Salary staffs={this.props.salary.salary} allItem={true} fetchsalary={this.props.fetchsalary} />} />
                            <Redirect to="/menu" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );

    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));