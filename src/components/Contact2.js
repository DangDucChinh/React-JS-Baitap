import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Label, Col, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors, Field } from 'react-redux-form';



class Contact2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: '.Tel',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.hanldeInputChange = this.hanldeInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this) ; 
    }
    hanldeInputChange(event) {
        const phantu = event.target;// lấy ra phần tử đang có sự kiện onChange 
        const value = phantu.type === 'checkbox' ? phantu.checked : phantu.value;
        const name = phantu.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        alert("State is : " + JSON.stringify(this.state));
        event.preventDefault();
    }
    handleBlur = (field) =>(evt)=>{
        this.setState({
            touched:{...this.state.touched, [field]: true}
        });
    }
    validate(fn, ln, tn, em) {
        const canhbaos = { // biến cảnh báo chứa lời cảnh báo của từng thành phần
            fn: '',
            ln: '',
            tn: '',
            em: ''
        }

        //nếu có chạm và độ dài < 3, cảnh báo
        if (this.state.touched.firstname === true && fn.length < 3) canhbaos.fn = 'Độ dài >= 3';
        else if (this.state.touched.firstname === true && fn.length > 15) canhbaos.fn = 'Độ dài <= 15';

        if (this.state.touched.lastname === true && ln.length < 3) canhbaos.ln = 'Độ dài ln >= 3';
        else if (this.state.touched.lastname === true && ln.length > 15) canhbaos.ln = 'Độ dài ln <= 15';

        if (this.state.touched.email && em.split('').filter(x => x === '@').length !== 1)
            canhbaos.em = 'Email should contain a @';
        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(tn))
            canhbaos.tn = 'Tel. Number phải chứa chữ số !';

        return canhbaos;
    }

    render() {
        const loilam = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>

                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12' style={{ height: '50px' }}>
                        <h4>Send us Your Feeback : </h4>
                    </div>
                    <div className='col-12 col-md-9 col-lg-9'>
                        <Form onSubmit={this.handleSubmit}>
                            {/* Mỗi FB như một hàng */}
                            <FormGroup row>
                                <Label md={2} htmlFor="firstname">First Name</Label>
                                <Col md={10}>
                                    <Input type='text'
                                        placeholder='Fist Name'
                                        value={this.state.firstname}
                                        id='firstname' name='firstname' 
                                        onChange={this.hanldeInputChange} 
                                        onBlur={this.handleBlur('firstname')} // nhiệm vụ là kích hoạt true của touched - đã chạm
                                        valid={loilam.fn === ''} // nếu lỗi của .fn = '' thì ko có lỗi ,
                                        invalid={loilam.fn !== ''}
                                        />
                                    <FormFeedback>{loilam.fn}</FormFeedback> 
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor="lastname">Last Name</Label>
                                <Col md={10}>
                                    <Input placeholder='Last Name' value={this.state.lastname}
                                        id="lastname" name="lastname" type='text' onChange={this.hanldeInputChange} 
                                        onBlur={this.handleBlur('lastname')}
                                        valid={loilam.ln === ''}
                                        invalid={loilam.ln !== ''}/>
                                    <FormFeedback>{loilam.ln}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Telnumber</Label>
                                <Col md={10}>
                                    <Input type='tel' placeholder='TelPhoneNumber' value={this.state.telnum}
                                        id='telnum' name='telnum' onChange={this.hanldeInputChange} 
                                        onBlur={this.handleBlur('telnum')}
                                        valid={loilam.tn === ''}
                                        invalid={loilam.tn !== ''}/>
                                    <FormFeedback>{loilam.tn}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor='email'>Email</Label>
                                <Col md={10}>
                                    <Input type='email' placeholder='Email' value={this.state.email}
                                        id='email' name='email' onChange={this.hanldeInputChange} 
                                        onBlur={this.handleBlur('email')}
                                        valid={loilam.em === ''}
                                        invalid={loilam.em !== ''}/>
                                    <FormFeedback>{loilam.em}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' id='agree' name='agree'
                                                checked={this.state.agree} onChange={this.hanldeInputChange} />{' '}
                                            <strong>Contact us ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type='select' id='contactType' name='contactType'
                                        placeholder='.TelNum' value={this.state.contactType} onChange={this.hanldeInputChange}>
                                        <option>.Telnumber</option>
                                        <option>.Email</option>
                                        <option>.FaceBook</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor='message'>Message</Label>
                                <Col md={10}>
                                    <Input type='textarea' value={this.state.message}
                                        id='message' name='message' onChange={this.hanldeInputChange} rows={7} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 4, offset: 2 }}>
                                    <Button outline color='primary' type='submit'>Submit Comment</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact2;





// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Breadcrumb, BreadcrumbItem,Button, Row, Col, Label } from 'reactstrap';
// import { Control, Errors, LocalForm} from 'react-redux-form';

// class Contact2 extends Component {
//     constructor(props){
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.state = {}

//     }
    

//     handleSubmit(values) {
//         console.log('Current State is: ' + JSON.stringify(values));
//         alert('Current State is: ' + JSON.stringify(values));
//         this.props.resetFeedbackForm();
//         // event.preventDefault();
//     }
  
//     render() {
//         const required = (val) => val.trim() && val.trim().length;
//         const maxLength = (len) => (val) => !(val.trim()) || (val.trim().length <= len);
//         const minLength = (len) => (val) => val.trim() && (val.trim().length >= len);
//         const isNumber = (val) => !isNaN(Number(val));
//         const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
//         console.log('render form') ;
//             return(
//             <div className="container">
//                 <div className="row">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>Contact Us</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div className="col-12">
//                         <h3>Contact Us</h3>
//                         <hr />
//                     </div>                
//                 </div>
//                 <div className="row row-content">
//                     <div className="col-12">
//                     <h3>Location Information</h3>
//                     </div>
//                     <div className="col-12 col-sm-4 offset-sm-1">
//                             <h5>Our Address</h5>
//                             <address>
//                             121, Clear Water Bay Road<br />
//                             Clear Water Bay, Kowloon<br />
//                             HONG KONG<br />
//                             <i className="fa fa-phone"></i>: +852 1234 5678<br />
//                             <i className="fa fa-fax"></i>: +852 8765 4321<br />
//                             <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
//                             </address>
//                     </div>
//                     <div className="col-12 col-sm-6 offset-sm-1">
//                         <h5>Map of our Location</h5>
//                     </div>
//                     <div className="col-12 col-sm-11 offset-sm-1">
//                         <div className="btn-group" role="group">
//                             <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
//                             <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
//                             <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="row row-content">
//                    <div className="col-12">
//                       <h3>Send us your Feedback</h3>
//                    </div>
//                     <div className="col-12 col-md-9">
//                     <LocalForm model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
//                     <Row className="form-group">
//                                 <Label htmlFor="firstname" md={2}>First Name</Label>
//                                 <Col md={10}>
//                                     <Control.text model=".firstname" id="firstname" name="firstname"
//                                         placeholder="First Name"
//                                         className="form-control"
//                                         validators={{
//                                             required, minLength: minLength(3), maxLength: maxLength(15)
//                                         }}
//                                          />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".firstname"
//                                         show="touched"
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be greater than 3 characters',
//                                             maxLength: 'Must be 15 characters or less'
//                                         }}
//                                      />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="lastname" md={2}>Last Name</Label>
//                                 <Col md={10}>
//                                     <Control.text model=".lastname" id="lastname" name="lastname"
//                                         placeholder="Last Name"
//                                         className="form-control"
//                                         validators={{
//                                             required, minLength: minLength(3), maxLength: maxLength(15)
//                                         }}
//                                          />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".lastname"
//                                         show="touched"
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be greater than 2 characters',
//                                             maxLength: 'Must be 15 characters or less'
//                                         }}
//                                      />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
//                                 <Col md={10}>
//                                     <Control.text model=".telnum" id="telnum" name="telnum"
//                                         placeholder="Tel. Number"
//                                         className="form-control"
//                                         validators={{
//                                             required, minLength: minLength(3), maxLength: maxLength(15), isNumber
//                                         }}
//                                          />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".telnum"
//                                         show="touched"
//                                         messages={{
//                                             required: 'Required',
//                                             minLength: 'Must be greater than 2 numbers',
//                                             maxLength: 'Must be 15 numbers or less',
//                                             isNumber: 'Must be a number'
//                                         }}
//                                      />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="email" md={2}>Email</Label>
//                                 <Col md={10}>
//                                     <Control.text model=".email" id="email" name="email"
//                                         placeholder="Email"
//                                         className="form-control"
//                                         validators={{
//                                             required, validEmail
//                                         }}
//                                          />
//                                     <Errors
//                                         className="text-danger"
//                                         model=".email"
//                                         show="touched"
//                                         messages={{
//                                             required: 'Required',
//                                             validEmail: 'Invalid Email Address'
//                                         }}
//                                      />
//                                 </Col>
//                             </Row>
                            
//                             <Row className="form-group">
//                                 <Col md={{size: 6, offset: 2}}>
//                                     <div className="form-check">
//                                         <Label check>
//                                             <Control.checkbox model=".agree" name="agree"
//                                                 className="form-check-input"
//                                                  /> {' '}
//                                                 <strong>May we contact you?</strong>
//                                         </Label>
//                                     </div>
//                                 </Col>
//                                 <Col md={{size: 3, offset: 1}}>
//                                     <Control.select model=".contactType" name="contactType"
//                                         className="form-control">
//                                         <option>Tel.</option>
//                                         <option>Email</option>
//                                     </Control.select>
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Label htmlFor="message" md={2}>Your Feedback</Label>
//                                 <Col md={10}>
//                                     <Control.textarea model=".message" id="message" name="message"
//                                         rows="12"
//                                         className="form-control" />
//                                 </Col>
//                             </Row>
//                             <Row className="form-group">
//                                 <Col md={{size:10, offset: 2}}>
//                                     <Button type="submit" color="primary">
//                                     Send Feedback
//                                     </Button>
//                                 </Col>
//                             </Row>
//                         </LocalForm>
//                     </div>
//                </div>
//             </div>
//         );
      
      
//     }
  
//   }


// export default Contact2;