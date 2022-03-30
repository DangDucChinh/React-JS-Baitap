import React, { Component } from "react";
import { Card, Col, CardImg, Modal, ModalBody,FormFeedback, ModalHeader, Form, Breadcrumb, BreadcrumbItem, Input, FormGroup, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
function RenderMenuItem({ staff, aClick }) {
    return (
        <Link to={`/nhanvien/${staff.id}`}>
            <Card>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <p style={{ textDecoration: 'none', textAlign: 'center' }}>{staff.name}</p>
            </Card>
        </Link>
    );
}



class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameF: '',

            isModalOpen:false,
            name:'',
            ngaysinh:'',
            ngayvaoCT:'',
            phongban:'Sale',
            hesoluong:1,
            songaynghicon:0,
            songaylamthem:0,
            salary:30000,
            image: "/assets/images/anh_the.png",
            touched:{
                name:false,
                ngaysinh:false,
                ngayvaoCT:false
            }
        }
        this.timKiem = this.timKiem.bind(this);
        this.toggleModal = this.toggleModal.bind(this) ; 
        this.ModalOnchange = this.ModalOnchange.bind(this) ; 
        this.ModalOnBlur = this.ModalOnBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this) ; 
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    ModalOnchange(event){
        const input = event.target ; 
        const name = input.name ; 
        const value = input.value ; 
        this.setState({
            [name]:value
        })
    }
    ModalOnBlur = (field) => (evt) => { // cho biết trường nào đã thay đổi 
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    timKiem(event) {
        this.setState({
            nameF: this.search.value
        })
        event.preventDefault();
    }
    handleSubmit = ()=>{
        const newStaff = {
            name: this.state.name,
            doB: this.state.ngaysinh,
            salaryScale: this.state.hesoluong,
            startDate: this.state.ngayvaoCT,
            department: this.state.phongban,
            annualLeave: this.state.songaynghicon,
            overTime: this.state.songaylamthem,
            image: this.state.image 
        };
        this.props.onAdd(newStaff) ; 
    }
    validate(name, ngaysinh, ngayvaoCT){
        const loilam = {
            name:'',
            ngaysinh:'',
            ngayvaoCT:''
        }

        if(this.state.touched.name && name.length < 3) loilam.name = 'Số kí tự phải >=3 ';
        else if(this.state.touched.name && name.length >15 ) loilam.name = 'Số kí tự phải < 15';
        
        if(this.state.ngaysinh.touched && ngaysinh.length < 1) loilam.ngaysinh = 'Yêu cầu nhập';
        if(this.state.ngayvaoCT.touched && ngayvaoCT.length < 1) loilam.ngayvaoCT = 'Yêu cầu nhập';

        return loilam ; 
    }

    render() {
        const staffList = this.props.staffs
            .filter((val) => {
                if (this.state.nameF === "") return val;
                else if (val.name.toLowerCase().includes(this.state.nameF.toLowerCase())
                ) return val;
                return 0;
            })
            .map((val) => {
                return (
                    <div className="col-6 col-sm-6 col-md-4 col-lg-2 mt-2" key={val.id}>
                        <RenderMenuItem staff={val} />
                    </div>
                );
            })
        
        const errors = this.validate(this.state.name, this.state.ngaysinh, this.state.ngayvaoCT) ; 
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-8 col-md-3 col-lg-3" >
                        <h3>Nhân viên</h3>
                    </div>
                    <div className="col-4 col-md-3 col-lg-3" >
                        <Button style={{ width: '100px', float: 'right' }}
                        onClick={this.toggleModal}>+</Button>
                    </div>
                    <Form onSubmit={this.timKiem} className="col-12 col-md-6 col-lg-6" >
                        <Input  style={{ width: '70%', float: 'left' }}
                            type="text" id="search" name="search" placeholder="searching..."
                            innerRef={(input) => this.search = input} />
                        <Button className="col-2 col-md-6 col-lg-6" style={{ width: '100px', float: 'right' }}
                            color="primary"
                            id="buttonSearch" name="buttonSearch" type="submit" value='submit'>Tìm kiếm</Button>
                    </Form>
                </div>
                <div className="row">
                    {staffList}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="container"> 
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="name" md={3}>Tên</Label>
                                <Col md={9}>
                                <Input type="text" id='name' name='name' 
                                onChange={this.ModalOnchange}
                                onBlur={this.ModalOnBlur('name')}
                                valid={errors.name === ''}
                                invalid={errors.name !== ''}/>
                                <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="ngaysinh" md={3}>Ngày sinh</Label>
                                <Col md={9}>
                                <Input type="date" id='ngaysinh' name='ngaysinh' 
                                onChange={this.ModalOnchange}
                                onBlur={this.ModalOnBlur('ngaysinh')}
                                valid={errors.ngaysinh === ''}
                                invalid={errors.ngaysinh !== ''}/>
                                <FormFeedback>{errors.ngaysinh}</FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="ngayvaoCT" md={3}>Ngày vào công ty</Label>
                                <Col md={9}>
                                <Input type="date" id='ngayvaoCT' name='ngayvaoCT' 
                                onChange={this.ModalOnchange}
                                onBlur={this.ModalOnBlur('ngayvaoCT')}
                                valid={errors.ngayvaoCT === ''}
                                invalid={errors.ngayvaoCT !== ''}/>
                                <FormFeedback>{errors.ngayvaoCT}</FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Label md={3}>Phòng ban</Label>
                                <Col md={9}>
                                <Input type="select" id="phongban" name="phongban" value={this.state.phongban}
                                onChange={this.ModalOnchange} onBlur={this.ModalOnBlur} >
                                    <option>Sale</option>
                                    <option>HR</option>
                                </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="hesoluong" md={3}>Hệ số lương</Label>
                                <Col md={9}>
                                <Input type="text" id='hesoluong' name='hesoluong' value={this.state.hesoluong} 
                                onChange={this.ModalOnchange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="songaynghicon" md={3}>Số ngày nghỉ còn lại</Label>
                                <Col md={9}>
                                <Input type="text" id='songaynghicon' name='songaynghicon' value={this.state.songaynghicon} 
                                onChange={this.ModalOnchange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="songaylamthem" md={3}>Số ngày làm thêm</Label>
                                <Col md={9}>
                                <Input type="text" id='songaylamthem' name='songaylamthem' value={this.state.songaylamthem} 
                                onChange={this.ModalOnchange}/>
                                </Col>
                            </FormGroup>
                            <Button type="submit" color="primary" outline >
                                Thêm
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Menu;