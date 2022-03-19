import React,{Component} from "react";
import {Media} from 'reactstrap' ; // dùng media
// còn về sau dùng hiển thị list of items thì dùng Card
import {Card, CardText ,CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap' ; 

class Menu extends Component{
    constructor(props){ // hàm tạo với tham số props
        super(props) ; // 
        this.state = { // trang thái hiện tại gán bởi 1 Obj
            selectedDish : null 
        }
    }

    onDishSelected(dish){ // hàm sẽ thay đổi state mõi khi thực hiện click ; sẽ gán trạng thái hiện tại bởi 1 dish
        // mà được chọn hiện tại 
        this.setState({selectedDish: dish}); 
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 col-lg-4 mb-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    render(){ // phương thức render ( kết xuất và chắc chắn sẽ return ra 1 cái gì đó !)

        const menu = this.props.dishes.map((dish)=>{ // dishes ở Menu ( App.js ) => dishes ; 
            return (
                <div key={dish.id} className="col-12 col-md-5 col-lg-4 mb-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        

        return( // luôn trả ra ???
            <div className="container">
                <div className="row">
                    {menu} 
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        ); 
    }
}

export default Menu ; 