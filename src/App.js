import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar , NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent' ; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand className='class-1'>Thư mục 1</NavbarBrand>
          <NavbarBrand className='class-1'>Thư mục 2</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
