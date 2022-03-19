import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishdetailComponent from './components/DishdetailComponent';
import { DISHES } from './shared/dishes2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand>This is URL</NavbarBrand>
          </div>
        </Navbar>
        <DishdetailComponent dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
