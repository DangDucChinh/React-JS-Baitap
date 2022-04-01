import './App.css';
import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux' ; 
// 
import {ConfiguresStore} from './redux/configureStore';

const store = ConfiguresStore() ; 
// 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <MainComponent />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}
// cái này là 1 container
export default App;
