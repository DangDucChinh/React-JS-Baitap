import React, { Component } from "react";
import { Card, CardText, CardImg, CardImgOverlay, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function RenderMenuItem({ staff, aClick }) {
    return (
        <Link to={`/nhanvien/${staff.id}`}>
            <Card>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <p style={{ textDecoration: 'none',textAlign: 'center' }}>{staff.name}</p>
            </Card>
        </Link>
    );
}



const Menu = (props) => {
    const menu = props.staffs.map((staff) => {
        return (
            <div className="col-xs-6 col-sm-4 col-lg-2 mt-3" key={staff.id}>
                <RenderMenuItem staff={staff} />
            </div>
        );
    });
  
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Nhân viên</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;