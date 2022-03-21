import React, { Component } from "react";
import { Card, CardText, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import dateFormat from "dateformat";
import 'bootstrap/dist/css/bootstrap.min.css';

class DishDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        // console.log(this.props.dish);
        if (this.props.dish.length == 0) {
            return (
                <div className="container">
                    <div className="row" style={{ marginTop: '50px', marginBottom: '30px' }}>
                        <i>Bấm vào thẻ để hiển thị chi tiết món ăn !!!</i>
                    </div>
                </div>
            );
        } else {
            const mang = this.props.dish[0];
            // console.log(mang.id + " , " + mang.name);
            const listComment = mang.comments.map((tungComment) => {
                return (
                    <div key={tungComment.id}>
                        <p>{tungComment.comment}</p>
                        <p>--{tungComment.author}, {dateFormat(tungComment.date, "mmmm dS, yyyy")}</p>
                    </div>
                );
            });
            return (
                <div className="container">
                    <div key={mang.id}>
                        <div className="row" style={{ marginTop: '50px', marginBottom: '30px' }}>
                            <h5>Thông tin món ăn vừa lựa chọn : </h5>
                            <div className="col-xs-12 col-sm-6 col-lg-4">
                                <Card>
                                    <CardImg width="100%" src={mang.image} alt={mang.name} />
                                    <CardBody>
                                        <CardTitle>{mang.name}</CardTitle>
                                        <CardText>{mang.description}</CardText>
                                        Price: <i>{mang.price}</i> $
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
                    </div>
                </div>
            );
        }
    }
}

export default DishDetailComponent;
