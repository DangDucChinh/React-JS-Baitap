import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Label,
    Modal, ModalHeader, ModalBody, Button, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';
import dateFormat from "dateformat";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components'


//3 . 
function RenderComment({ comments, postComment, dishId }) {

    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                <Stagger in>
                    {comments.map((comment) => {
                        return (
                            <Fade in>
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>
                                        -- {comment.author},{" "}
                                        {new Intl.DateTimeFormat("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit"
                                        }).format(new Date(Date.parse(comment.date)))}
                                    </p>
                                </li>
                            </Fade>
                        );
                    })}
                </Stagger>
            </ul>
            <CommentForm dishId={dishId} postComment={postComment} />
        </div>
    );
}


//4 .
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(value) {
        this.toggleModal();
        this.props.postComment(
            this.props.dishId,
            value.rating,
            value.author,
            value.comment
        );
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span>Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <Row className="control-group">
                                <Label htmlFor="rating" md={10}>
                                    Rating
                                </Label>
                                <Control.select
                                    model=".rating"
                                    className="form-control m-2"
                                    id="rating"
                                    name="rating"
                                    defaultValue="1"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row>
                                <Label htmlFor="author" md={10}>
                                    Your Name
                                </Label>
                                <Control.text
                                    model=".author"
                                    className="form-control m-2"
                                    id="author"
                                    name="author"
                                    placeholder="Your Name"
                                ></Control.text>
                            </Row>
                            <Row className="control-group">
                                <Label htmlFor="comment" md={10}>
                                    Comments
                                </Label>
                                <Control.textarea
                                    model=".comment"
                                    className="form-control m-2"
                                    id="comment"
                                    name="comment"
                                    rows="10"
                                ></Control.textarea>
                                <Button color="primary">Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


//2 .
function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }} >
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}





//1 . 
class DishDetail2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className='container'>
                    <div className='row'>
                        <Loading />
                    </div>
                </div>
            );
        } else if (this.props.errMess) {
            return (
                <div className='container'>
                    <div className='row'>
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (this.props.dish != null) {
            return (
                <div className="container" style={{ marginBottom: '50px' }}>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish={this.props.dish} />
                        <RenderComment
                            comments={this.props.comments}
                            postComment={this.props.postComment}
                            dishId={this.props.dish.id} />
                        {/*  tại sao dishId ở đây lại dùng props.dish.Id  ????*/}

                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
export default DishDetail2;