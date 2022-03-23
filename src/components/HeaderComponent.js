import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        // <>  == React.Fragment ?
        return (
            <>
                <Navbar dark>
                    <div className='container'>
                        <NavbarBrand>This is React-App</NavbarBrand>
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