// import React, { Component } from "react";
// import { Card, CardText, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Card, CardImg, CardText,Button ,CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom' ; 
import SubmitComment from "./SubmitComment";
import {Comment} from 'react-redux';


function RenderDish({ dish }) {
    //console.log(dish) ; 
    return (
        <div className="col-xs-12 col-sm-6 col-lg-4">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    Price: <i>{dish.price}</i> $
                </CardBody>
                
            </Card>
            
        </div>
    );

}
function CommentForm ({comment}){
    const comment1 = comment.map((comment1)=>{
        return(
            <div>
            <p>{comment1.comment}</p>
            <p>{"-- "+comment1.author+ ", "+dateFormat(comment1.date,"dd/mm/yyyy")}</p>
            </div>
        )
    });
    return(
        <div className="col-12 col-md-5 m-1">
            <h4 style={{textAlign: "left"}}>Comments</h4>
                    {comment1}
        </div>
    )
}
function RenderComments({ comments, addComment, dishId }) {
    const listComment = comments.map((tungComment) => {
        return (
            <div key={tungComment.id}>
                <p>{tungComment.comment}</p>
                <p>--{tungComment.author}, {dateFormat(tungComment.date, "mmmm dS, yyyy")}</p>
            </div>
        );
    });
    return (
        <div className="col-xs-12 col-sm-6 col-lg-8">
            <Card>
                <h5>Comments</h5>
                <CommentForm comment={comments} />
            
            </Card><br />
            <SubmitComment /> 
            {/*  */}
        </div>

    );
}

const DishDetail = (props) => { 
        return (
            <div className='container'>
                <div className="row" style={{ marginTop: '50px'}}>
                    <h5>Thông tin món ăn vừa được chọn : </h5>
                </div>
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name} -</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row" style={{ marginTop: '50px', marginBottom: '30px' }}>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} 
                    addComment={props.addComment}
                    dishId={props.dish.id}/>
                </div>
                
            </div>
        );
}




export default DishDetail;
