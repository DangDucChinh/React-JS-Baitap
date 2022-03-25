import './App.css';
import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainComponent />
        </div>
      </BrowserRouter>
    );
  }
}
// cái này là 1 container
export default App;
