import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, FormGroup, Form, Modal, Input, Label, ModalHeader, ModalBody, FormFeedback } from 'reactstrap';
class SubmitComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            rating: "1*",
            yourname: '',
            comment: '',
            touched: {
                yourname: false,
                comment: false,
            }
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

    }
    handleBlur = (field) => (evt) => { // cho biết trường nào đã thay đổi 
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ // thay đổi các trạng thái mà gọi tới hàm này
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log('Yourname : ' + this.state.yourname + " / Comment : " + this.state.comment);
        alert('Current State is : ' + JSON.stringify(this.state));
        event.preventDefault(); // ngăn chặn hành vi xảy ra sự kiện khi ren
        // ra trang tiếp theo 
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    // handleLogin(event) {
    //     this.toggleModal();
    //     console.log('Yourname : ' + this.yourname.value + ", Comment : " + this.comment.value +
    //     ", Rating" + this.rating.value);
    //     alert('Yourname : ' + this.yourname.value + ", Comment : " + this.comment.value +
    //         ", Rating" + this.rating.value);
    //     event.preventDefault();
    // }
    validate(yourname, comment) { // mõi khi nhập thì nó kiểm ta lỗi , nếu lỗi báo ngay lập tức 
        const errors = {
            yourname: '',
            comment: '',
        };

        if (this.state.touched.yourname && yourname.length < 3)
            errors.yourname = 'Your Name should be >= 3 characters';
        else if (this.state.touched.yourname && yourname.length > 15)
            errors.yourname = 'Your Name should be <= 15 characters';

        if (this.state.touched.comment && comment.length < 1)
            errors.comment = 'Comment should be >= 1 characters';

        return errors;
    }

    render() {
        const errors = this.validate(this.state.yourname, this.state.comment);
        return (
            <div>
                <Card className="ml-auto" style={{ width: '200px' }}>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment </Button>
                </Card>
                {/* Chỉ isOpen khi mà state = true */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment of You</ModalHeader>
                    <ModalBody>
                        {/* nếu submit rồi thì hiển thị cái gì đó */}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input value={this.state.rating} type="select" id="rating" name="rating" onChange={this.handleInputChange}
                                    className="form-control">
                                    <option >1*</option>
                                    <option >2*</option>
                                    <option >3*</option>
                                    <option >4*</option>
                                    <option >5*</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="yourname">Your Name</Label>
                                <Input value={this.state.yourname} type="text" id="yourname" name="yourname"
                                    valid={errors.yourname === ''}
                                    invalid={errors.yourname !== ''}
                                    onBlur={this.handleBlur('yourname')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.yourname} kk</FormFeedback>

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input value={this.state.comment} type="textarea" id="comment" name="comment"
                                    valid={errors.comment === ''}
                                    invalid={errors.comment !== ''}
                                    onBlur={this.handleBlur('comment')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.comment}</FormFeedback>
                            </FormGroup>

                            <Button outline type="submit" classNme="bg-primary" value="submit">Nhập </Button>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}
export default SubmitComment; 