// import React, { Component } from "react";
// import { Card, Col, CardImg, Modal, ModalBody,FormFeedback, ModalHeader, Form, Breadcrumb, BreadcrumbItem, Input, FormGroup, Label } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import { Button } from "reactstrap";
// function RenderMenuItem({ staff, aClick }) {
//     return (
//         <Link to={`/nhanvien/${staff.id}`}>
//             <Card>
//                 <CardImg width="100%" src={staff.image} alt={staff.name} />
//                 <p style={{ textDecoration: 'none', textAlign: 'center' }}>{staff.name}</p>
//             </Card>
//         </Link>
//     );
// }



// class Menu extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nameF: '',

//             isModalOpen:false,
//             name:'',
//             ngaysinh:'',
//             ngayvaoCT:'',
//             phongban:'Sale',
//             hesoluong:1,
//             songaynghicon:0,
//             songaylamthem:0,
//             salary:30000,
//             image: "/assets/images/anh_the.png",
//             touched:{
//                 name:false,
//                 ngaysinh:false,
//                 ngayvaoCT:false
//             }
//         }
//         this.timKiem = this.timKiem.bind(this);
//         this.toggleModal = this.toggleModal.bind(this) ; 
//         this.ModalOnchange = this.ModalOnchange.bind(this) ; 
//         this.ModalOnBlur = this.ModalOnBlur.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this) ; 
//     }
//     toggleModal(){
//         this.setState({
//             isModalOpen: !this.state.isModalOpen
//         })
//     }
//     ModalOnchange(event){
//         const input = event.target ; 
//         const name = input.name ; 
//         const value = input.value ; 
//         this.setState({
//             [name]:value
//         })
//     }
//     ModalOnBlur = (field) => (evt) => { // cho biết trường nào đã thay đổi 
//         this.setState({
//             touched: { ...this.state.touched, [field]: true }
//         });
//     }
//     timKiem(event) {
//         this.setState({
//             nameF: this.search.value
//         })
//         event.preventDefault();
//     }
//     handleSubmit = ()=>{
//         const newStaff = {
//             name: this.state.name,
//             doB: this.state.ngaysinh,
//             salaryScale: this.state.hesoluong,
//             startDate: this.state.ngayvaoCT,
//             department: this.state.phongban,
//             annualLeave: this.state.songaynghicon,
//             overTime: this.state.songaylamthem,
//             image: this.state.image 
//         };
//         this.props.onAdd(newStaff) ; 
//     }
//     validate(name, ngaysinh, ngayvaoCT){
//         const loilam = {
//             name:'',
//             ngaysinh:'',
//             ngayvaoCT:''
//         }

//         if(this.state.touched.name && name.length < 3) loilam.name = 'Số kí tự phải >=3 ';
//         else if(this.state.touched.name && name.length >15 ) loilam.name = 'Số kí tự phải < 15';

//         if(this.state.ngaysinh.touched && ngaysinh.length < 1) loilam.ngaysinh = 'Yêu cầu nhập';
//         if(this.state.ngayvaoCT.touched && ngayvaoCT.length < 1) loilam.ngayvaoCT = 'Yêu cầu nhập';

//         return loilam ; 
//     }

//     render() {
//         const staffList = this.props.staffs
//             .filter((val) => {
//                 if (this.state.nameF === "") return val;
//                 else if (val.name.toLowerCase().includes(this.state.nameF.toLowerCase())
//                 ) return val;
//                 return 0;
//             })
//             .map((val) => {
//                 return (
//                     <div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-2" key={val.id}>
//                         <RenderMenuItem staff={val} />
//                     </div>
//                 );
//             })

//         const errors = this.validate(this.state.name, this.state.ngaysinh, this.state.ngayvaoCT) ; 
//         return (
//             <div className="container">
//                 <div className="row">
//                     <Breadcrumb>
//                         <BreadcrumbItem>
//                             <Link to='/home'>Home</Link>
//                         </BreadcrumbItem>
//                         <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div className="col-8 col-md-3 col-lg-3" >
//                         <h3>Nhân viên</h3>
//                     </div>
//                     <div className="col-4 col-md-3 col-lg-3" >
//                         <Button style={{ width: '100px', float: 'right' }}
//                         onClick={this.toggleModal}>+</Button>
//                     </div>
//                     <Form onSubmit={this.timKiem} className="col-12 col-md-6 col-lg-6" >
//                         <Input  style={{ width: '70%', float: 'left' }}
//                             type="text" id="search" name="search" placeholder="searching..."
//                             innerRef={(input) => this.search = input} />
//                         <Button className="col-2 col-md-6 col-lg-6" style={{ width: '100px', float: 'right' }}
//                             color="primary"
//                             id="buttonSearch" name="buttonSearch" type="submit" value='submit'>Tìm kiếm</Button>
//                     </Form>
//                 </div>
//                 <div className="row">
//                     {staffList}
//                 </div>
//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="container"> 
//                     <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
//                     <ModalBody>
//                         <Form onSubmit={this.handleSubmit}>
//                             <FormGroup row>
//                                 <Label htmlFor="name" md={3}>Tên</Label>
//                                 <Col md={9}>
//                                 <Input type="text" id='name' name='name' 
//                                 onChange={this.ModalOnchange}
//                                 onBlur={this.ModalOnBlur('name')}
//                                 valid={errors.name === ''}
//                                 invalid={errors.name !== ''}/>
//                                 <FormFeedback>{errors.name}</FormFeedback>
//                                 </Col>

//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label htmlFor="ngaysinh" md={3}>Ngày sinh</Label>
//                                 <Col md={9}>
//                                 <Input type="date" id='ngaysinh' name='ngaysinh' 
//                                 onChange={this.ModalOnchange}
//                                 onBlur={this.ModalOnBlur('ngaysinh')}
//                                 valid={errors.ngaysinh === ''}
//                                 invalid={errors.ngaysinh !== ''}/>
//                                 <FormFeedback>{errors.ngaysinh}</FormFeedback>
//                                 </Col>

//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label htmlFor="ngayvaoCT" md={3}>Ngày vào công ty</Label>
//                                 <Col md={9}>
//                                 <Input type="date" id='ngayvaoCT' name='ngayvaoCT' 
//                                 onChange={this.ModalOnchange}
//                                 onBlur={this.ModalOnBlur('ngayvaoCT')}
//                                 valid={errors.ngayvaoCT === ''}
//                                 invalid={errors.ngayvaoCT !== ''}/>
//                                 <FormFeedback>{errors.ngayvaoCT}</FormFeedback>
//                                 </Col>

//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label md={3}>Phòng ban</Label>
//                                 <Col md={9}>
//                                 <Input type="select" id="phongban" name="phongban" value={this.state.phongban}
//                                 onChange={this.ModalOnchange} onBlur={this.ModalOnBlur} >
//                                     <option>Sale</option>
//                                     <option>HR</option>
//                                 </Input>
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label htmlFor="hesoluong" md={3}>Hệ số lương</Label>
//                                 <Col md={9}>
//                                 <Input type="text" id='hesoluong' name='hesoluong' value={this.state.hesoluong} 
//                                 onChange={this.ModalOnchange}/>
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label htmlFor="songaynghicon" md={3}>Số ngày nghỉ còn lại</Label>
//                                 <Col md={9}>
//                                 <Input type="text" id='songaynghicon' name='songaynghicon' value={this.state.songaynghicon} 
//                                 onChange={this.ModalOnchange}/>
//                                 </Col>
//                             </FormGroup>
//                             <FormGroup row>
//                                 <Label htmlFor="songaylamthem" md={3}>Số ngày làm thêm</Label>
//                                 <Col md={9}>
//                                 <Input type="text" id='songaylamthem' name='songaylamthem' value={this.state.songaylamthem} 
//                                 onChange={this.ModalOnchange}/>
//                                 </Col>
//                             </FormGroup>
//                             <Button type="submit" color="primary" outline >
//                                 Thêm
//                             </Button>
//                         </Form>
//                     </ModalBody>
//                 </Modal>
//             </div>
//         );
//     }
// }

// export default Menu;

import React, { Component } from 'react';
import {
    Card, CardImg, CardTitle, Button, Input, Form, Row, Col,
    Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Label
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { FadeTransform } from 'react-animation-components';
import { Loading } from './LoadingComponent';
import { Transition } from 'react-transition-group';
function RenderMenuItem({ staffs, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        return (
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.25) translateY(-50%)'
                }}>
                <Card style={{ border: '0px' }}>
                    <Link to={`/menu/${staffs.id}`} style={{ margin: '0px' }} >
                        <CardImg width="100%" src={staffs.image} alt={staffs.name} />
                        <CardTitle style={{ color: "black", textAlign: "center" }}>{staffs.name}</CardTitle>
                    </Link>
                </Card>
            </FadeTransform>
        );
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: this.props.staffs,
            name: '',
            isModalOpen: false,
            istransition: false,
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSearch(event) {
        event.preventDefault();
        // console.log('STATE NAME ' + this.state.name);
        // console.log('PROPS STAFF ' + JSON.stringify(this.props.staffs));
        //Check if Staff Name is undefined or not.


        const result = this.props.staffs.filter(s => s.name?.toLowerCase().match(this.state?.name.toLowerCase()));
        this.setState({
            staffs: result,
            name: this.name.value,
        });


    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        this.props.postStaffs(values.username, values.doB, values.startDate, values.department, values.salaryScale, values.overTime, values.annualLeave);
        this.setState({
            istransition: true,
        })

    }

    render() {
        const chuanhap = (val) => val && (val.length >= 0);
        const isNumber = (val) => !isNaN(Number(val));
        const minNum = (val) => !chuanhap(val) || !isNumber(val) || val >= 1;
        const maxNum = (val) => val <= 3 || !isNumber(val);
        const minLength = (len) => (val) => !chuanhap(val) || (val && (val.length >= len));
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const soDuong = (val) => !(isNumber(val)) || val >= 0;
        const menu = this.state.staffs.map((staff, index) => {
            return (
                <div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-2" key={index}>
                    <RenderMenuItem staffs={staff} isLoading={this.props.staffsLoading} errMess={this.props.staffsErrMess} />
                </div>
            );
        });



        return (
            <Transition in={this.state.istransition} timeout={700}>


                <div className="container">
                    {/* <div className="row">
                        <div className="col-9 col-md-3 col-lg-2" style={{ marginTop: "10px" }} >
                            <h4>Nhân viên</h4>
                        </div>
                        <div className="col-1">
                            <Col style={{ marginTop: "10px" }}>
                                <Button type="submit" color="primary" onClick={this.toggleModal}
                                >+</Button>
                            </Col>
                        </div>
                        <div className='col-12 col-md-8'>
                            <Form onSubmit={this.handleSearch}>
                                <Row className="form-group">
                                    <Col md={{ size: 6, offset: 2 }} style={{ marginTop: "10px" }}>
                                        <Input type="text" id="name" name="name"
                                            innerRef={(input) => this.name = input}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                    <Col md={{ size: 2, offset: 1 }} style={{ marginTop: "10px" }}>
                                        <Button type="submit" color="primary"
                                        >Search</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <hr />
                    </div> */}

                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-8 col-md-3 col-lg-3" style={{marginTop: '10px'}}>
                            <h3>Nhân viên</h3>
                        </div>
                        <div className="col-4 col-md-3 col-lg-3" style={{marginTop: '10px'}}>
                            <Button style={{ width: '100px', float: 'right' }}
                                type="submit" color="primary" onClick={this.toggleModal}>+</Button>
                        </div>
                        <Form onSubmit={this.handleSearch} className="col-12 col-md-6 col-lg-6" style={{marginTop: '10px'}}>
                            <Input style={{ width: '70%', float: 'left' }}
                                type="text" id="name" name="name"
                                innerRef={(input) => this.name = input}
                                onChange={this.handleInputChange} />
                            <Button className="col-2 col-md-6 col-lg-6" style={{ width: '100px', float: 'right' }}
                                type="submit" color="primary" >Tìm kiếm</Button>
                        </Form>
                    </div>
                    <hr style={{marginTop: '10px'}} />


                    <div className="row">
                        {menu}
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="username" md={4}>Tên</Label>
                                    <Col md={8}>
                                        <Control.text model=".username" id="username" name="username"
                                            placeholder="Name"
                                            defaultValue='Nhân viên mới'
                                            className="form-control"
                                            validators={{
                                                chuanhap,
                                                minLength: minLength(3), maxLength: maxLength(30)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".username"
                                            show="touched"
                                            messages={{
                                                chuanhap: 'Chưa nhập ',
                                                minLength: 'Ít nhất 3 kí tự',
                                                maxLength: 'Tối đa 30 kí tự'

                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="doB" md={4}>Ngày sinh</Label>
                                    <Col md={8}>
                                        <Control.text model=".doB" id="doB" name="doB"
                                            className="form-control" type='date'
                                            defaultValue="2000-01-01"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="startDate" md={4}>Ngày vào công ty</Label>
                                    <Col md={8}>
                                        <Control.text model=".startDate" id="startDate" name="startDate"
                                            className="form-control" type='date'
                                            defaultValue="2020-01-01"
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="department" md={4}>Phòng ban</Label>
                                    <Col md={8}>
                                        <Control.select model=".department" id="department" name="department"
                                            defaultValue='Dept01'
                                            className="form-control">
                                            <option value='Dept01'>Sale</option>
                                            <option value='Dept02'>HR</option>
                                            <option value='Dept03'>Marketing</option>
                                            <option value='Dept04'>IT </option>
                                            <option value='Dept05'>Finance</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="salaryScale" md={4}>Hệ số lương</Label>
                                    <Col md={8}>
                                        <Control.text model=".salaryScale" id="salaryScale" name="salaryScale"
                                            placeholder="1->3"
                                            defaultValue='1'
                                            className="form-control"
                                            validators={{
                                                chuanhap,
                                                isNumber,
                                                minNum,
                                                maxNum
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".salaryScale"
                                            show="touched"
                                            messages={{
                                                chuanhap: 'Chưa nhập ',
                                                isNumber: 'Phải là số ',
                                                minNum: 'Phải >= 1 ',
                                                maxNum: 'Phải <=3 '
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại</Label>
                                    <Col md={8}>
                                        <Control.text model=".annualLeave" id="annualLeave" name="annualLeave"
                                            defaultValue='0'
                                            className="form-control"
                                            validators={{
                                                chuanhap,
                                                isNumber,
                                                soDuong
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".annualLeave"
                                            show="touched"
                                            messages={{
                                                chuanhap: 'Chưa nhập ',
                                                isNumber: 'Phải là số',
                                                soDuong: 'Phải >=0'

                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="overTime" md={4}>Số ngày làm thêm</Label>
                                    <Col md={8}>
                                        <Control.text model=".overTime" id="overTime" name="overTime"
                                            defaultValue='0'
                                            className="form-control"
                                            validators={{
                                                chuanhap,
                                                isNumber,
                                                soDuong
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".overTime"
                                            show="touched"
                                            messages={{
                                                chuanhap: 'Chưa nhập ',
                                                isNumber: 'Phải là số',
                                                soDuong: 'Phải >=0'

                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col xs={6} md={4} style={{ margin: 'auto' }}>
                                        <Button type="submit" color="primary">
                                            Thêm mới
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </Transition>
        );
    }
}

export default Menu;

