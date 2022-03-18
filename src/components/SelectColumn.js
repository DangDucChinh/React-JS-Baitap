import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SelectColumn extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false, // trạng thái không hoạt động
        activeColumn: 3
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  toggles(selectColumn){
      this.setState({activeColumn: selectColumn})
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}> 
      {/* Sự kiện chuyển đổi (toggle) */}
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Chọn chế độ xem (1-2-3) cột : </DropdownItem>
          <DropdownItem onClick={()=>this.toggles(3)} value='3'>3 Cột</DropdownItem>
          <DropdownItem onClick={()=>this.toggles(2)} value='2'>2 Cột</DropdownItem>
          <DropdownItem onClick={()=>this.toggles(1)} value='1'>1 Cột</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}