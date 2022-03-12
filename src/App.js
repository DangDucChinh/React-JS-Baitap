import logo from './logo.svg';
import './App.css';
import {Navbar , NavbarBrand} from 'reactstrap';
function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div class="container">
        <NavbarBrand className='class-1'>Thư mục 1</NavbarBrand>
        <NavbarBrand className='class-1'>Thư mục 2</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
