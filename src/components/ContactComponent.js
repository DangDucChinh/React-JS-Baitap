import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem({ department}) {
    return (
            <Card style={{padding:'10px'}}>
                <CardTitle><b>{department.name}</b></CardTitle>
                <CardText>Số lượng nhân viên : {department.numberOfStaff}</CardText>
            </Card>
    );
}


function Contact(props) { 
    const menuDepartments = props.departments.map((department) => {
        return (
            <div className="col-xs-12 col-sm-6 col-lg-4 mt-3" key={department.id}>
                <RenderMenuItem department={department} />
            </div>
        );
    });
    return (
        
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Phòng Ban</h3>
                    <hr />
                </div>
            </div>
            <div className='row' style={{marginBottom:'100px'}}>
                {menuDepartments}
            </div>
        </div>
    );
}

export default Contact;