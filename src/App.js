import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardTitle, Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import { STAFFS } from './shared/staffs';
import StaffListComponent from './components/StaffListComponent';
import { Card } from 'reactstrap';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import SelectColumn from './components/SelectColumn';
import { Button } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS, // trạng thái hiên tại là staff = mảng các staff trong json
      cot: 3
    }
  }
  thaydoicot(c){
    this.setState({cot:c});
  }

  render() {
    // console.log(this.state.cot);
    return (
      <div className="container-fluid">
        <Navbar dark color="info">
          <NavbarBrand>
            <h3>Ứng dụng quản lí nhân sự v1.0</h3>
          </NavbarBrand>
        </Navbar>
          <h5>Bấm nút để hiển thị số cột :</h5>
          <Button onClick={()=>this.thaydoicot(1)} style={{display:"inline",margin:"10px"}}>1</Button>
          <Button onClick={()=>this.thaydoicot(2)} style={{display:"inline",margin:"10px"}}>2</Button>
          <Button onClick={()=>this.thaydoicot(3)} style={{display:"inline",margin:"10px"}}>3</Button>

        <StaffListComponent staffs={this.state.staffs} cot={this.state.cot}/>
        {/* Gán thuộc tính staffs cho trạng thái staff để truyền được staffs : STAFFS vào trong StaffList */}
      </div>
    ); 
  }
}

export default App;
