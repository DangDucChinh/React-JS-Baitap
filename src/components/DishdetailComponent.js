import dateFormat from "dateformat";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ staff }) {
    return (
        <div className="row" style={{ marginTop: '50px', marginBottom: '30px' }}>
            <div className="col-xs-12 col-sm-4 col-lg-3">
                <Card>
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                </Card>
            </div>
            <div className="col-xs-12 col-sm-8 col-lg-9">
                <Card style={{padding:'10px'}}>
                    <b>Họ và tên : {staff.name}</b>
                    <p>Ngày sinh : {dateFormat(staff.doB, "mmmm dS, yyyy")}</p>
                    <p>Ngày vào công ty : {dateFormat(staff.startDate, "mmmm dS, yyyy")}</p>
                    <p>Phòng ban :{staff.department.name} </p>
                    <p>Số ngày nghỉ : {staff.annualLeave}</p>
                    <p>Số ngày đã làm thêm : {staff.overTime}</p>
                </Card>
            </div>
        </div>
    );

}

const DishDetail = (props) => {
    return (
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/nhanvien">Nhân viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <hr />
                </div>
            </div>
            <div className="row" style={{ marginTop: '50px' }}>
                <h5>Thông tin nhân viên vừa được chọn : </h5>
            </div>
            <RenderDish staff={props.staff} />
        </div>
    );
}


export default DishDetail;
