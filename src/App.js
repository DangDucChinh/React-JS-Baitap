import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

import { render } from '@testing-library/react';
import { DISHES } from './shared/dishes';

class App extends Component{
  constructor(props){
    super(props) ; 

    this.state = {
      dishes : DISHES 
    }
  }
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand className='class-1'>Thư mục 1</NavbarBrand>
            <NavbarBrand className='class-1'>Thư mục 2</NavbarBrand>
            <NavbarBrand className='class-1'>Thư mục 2</NavbarBrand>
            <NavbarBrand className='class-1'>Thư mục 2</NavbarBrand>
            <NavbarBrand className='class-1'>Thư mục 2</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
