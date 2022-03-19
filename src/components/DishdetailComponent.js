import React, { Component } from "react";
import { Card, CardText, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
import 'bootstrap/dist/css/bootstrap.min.css';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null // trạng thái khởi tạo là chưa được chọn  ;
        }
    }

    setStateSelect(dish){
        this.setState({selected: dish}) 
    }


    renderLaiDish(dish) {
        if (dish != null) {
            const listComment = dish.comments.map((tungComment)=>{
                return(
                    <div key={tungComment.id}>
                        <p>{tungComment.comment}</p>
                        <p>--{tungComment.author}, {dateFormat(tungComment.date, "mmmm dS, yyyy")}</p>
                    </div>
                    
                );
            });
            return (
               <div className="row" style={{marginTop:'50px',marginBottom:'30px'}}>
                    <h5>Thông tin món ăn vừa lựa chọn : </h5>
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
                    <div className="col-xs-12 col-sm-6 col-lg-8">
                    <Card>
                       <h5>Comments</h5>
                       {listComment}
                    </Card>
                    </div>
               </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() { // quan trọng nhất trong việc trả ra ứng dụng của react để hiển thị 
        const menunew = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-xs-12 col-sm-6 col-lg-3 mt-3">
                    <Card onClick={() => this.setStateSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                        <i>Price : {dish.price} $.</i>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menunew}
                </div>
                {this.renderLaiDish(this.state.selected)}
            </div>
        );
    }
}

export default DishdetailComponent; 