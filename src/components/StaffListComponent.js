import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';
import App from '../App';

class StaffListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }
    /*
    Bộ phận đang làm việc.
Ngày sinh
Ngày vào công ty
Phòng ban
Số ngày nghỉ còn lại
Số ngày đã làm thêm.
     */

    setStaff(staff) {
        this.setState({ selected: staff });
    }
    renderStaff(staff) {
        const cssStyle = {
            marginTop: '20px',
            marginBottom: '20px'
        };
        // bản chất style cho reactDOM đó là các đối tượng 
        if (staff != null) {
            return (
                <div className='row' style={cssStyle}>
                    <div className='col-12 col-md-4 col-lg-4'>
                        <CardImg src={staff.image} alt={staff.name} width="100%" />
                    </div>
                    <div className='col-12 col-md-8 col-lg-8'>
                        <Card>
                            <CardTitle>Thông tin nhân viên : </CardTitle>
                            <CardBody>
                                <b>Họ và tên : {staff.name}</b>
                                <p>Ngày sinh : {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
                                <p>Ngày vào công ty : {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
                                <p>Phòng ban: {staff.department.name}</p>
                                <p>Số ngày nghỉ còn lại : {staff.annualLeave}</p>
                                <p>Số ngày đã làm thêm : {staff.overTime}</p>
                            </CardBody>
                        </Card>
                    </div>
                </div >
            );
        } else {
            return (
                <div className='row'>
                    <i>Nhấp vào thẻ nhân viên để biết thêm chi tiết !!!</i>
                </div>
            );
        }

    }

    render() {
        let col = this.props.cot; // lấy trạng thái truyền từ props
        const menu = this.props.staffs.map((staff) => {
            if (col == 3) {
                return (
                    <div key={staff.id} className="col-4 mt-3">
                        {/* Có nghĩa mỗi dòng nó sẽ chiếm 1 div với 1 id */}
                        <Card onClick={() => this.setStaff(staff)}>
                            <CardText>{staff.name}</CardText>
                        </Card>
                    </div>
                );
            } else if (col == 2) {
                // "col-xs-12 col-sm-6 col-lg-4 mt-3"
                return (
                    <div key={staff.id} className="col-6 mt-3">
                        {/* Có nghĩa mỗi dòng nó sẽ chiếm 1 div với 1 id */}
                        <Card onClick={() => this.setStaff(staff)}>
                            <CardText>{staff.name}</CardText>
                        </Card>
                    </div>
                );
            } else if (col == 1) {
                return (
                    <div key={staff.id} className="col-12 mt-3">
                        {/* Có nghĩa mỗi dòng nó sẽ chiếm 1 div với 1 id */}
                        <Card onClick={() => this.setStaff(staff)}>
                            <CardText>{staff.name}</CardText>
                        </Card>
                    </div>
                );
            }
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderStaff(this.state.selected)}
            </div>
        );
    }

}

export default StaffListComponent;  
