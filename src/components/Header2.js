import React, { Component } from "react";
import {
    Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Jumbotron,
    Modal, ModalHeader, ModalBody, FormGroup, Input, Label, Button, Form
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { ModalTitle } from "react-bootstrap";

class Header2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleModalOpen() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    handleSubmit(event) { // nha
        this.handleModalOpen();
        alert('Username :' + this.username.value + "\nPassword : " + this.password.value + "\nRemember :" + this.ghinho.checked);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand='md' style={{ paddingLeft: '40px' }}>
                    <NavbarToggler onClick={this.toggleNav} />
                    {/* khi clcik thì state thay đổi */}
                    <NavbarBrand className="me-auto" href="/">
                        <img src="assets/images/logo.png" alt="Logo-Mukbag" height="30" width="41" />
                    </NavbarBrand>
                    <Collapse navbar isOpen={this.state.isNavOpen}>
                        {/* isOpne = true thì render ra , ko thì ko render ra được */}
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        {/* căn lền trái càng nhiều càng tốt */}
                    </Collapse>

                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button onClick={this.handleModalOpen}>
                                <span className="fa fa-sign-in fa-lg"></span>Login
                            </Button>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.handleModalOpen} >
                    <ModalHeader toggle={this.handleModalOpen}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">User name</Label>
                                <Input type="text" id='username' name='username'
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id='password' name='password'
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input innerRef={(dauvao) => this.ghinho = dauvao} type="checkbox" id='remember' name='remember' />
                                    <strong>Cho phép nhớ</strong>
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" value="submit" className="primary">Login !</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header2; 