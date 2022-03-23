import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props) ; 
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this) ; 
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        // <>  == React.Fragment ?
        return (
            <>
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="me-auto" href="/">
                            <img src="assets/images/logo.png" alt="Logo-Mukbag" height="30" width="41" />
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>  
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span>About Us
                                    </NavLink>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span>Menu
                                    </NavLink>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span>Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                {/* <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best suiscine and serious. But i can help you maeke restaurant in the Mukabbang at outside</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */}
                <div className="container-fluid bg-light text-dark p-5">
                    <div className="container bg-light p-1">
                        <h1 className="display-4 fw-bold">Welcome to React Application v1.0</h1>
                        <p>Go to My Website</p>
                        <a href="#" className="btn btn-primary">link</a>
                    </div>
                </div>
            </>
        );
    }
}

export default Header; 