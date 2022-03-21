import React,{Component} from "react";
import {Card, CardText ,CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 

class MenuComponent extends Component{
    constructor(props){ // hàm tạo với tham số props
        super(props) ; // 
        // this.state = { // trang thái hiện tại gán bởi 1 Obj
        //     selectedDish : null  // lựa chọn được 1 dish rồi . Khi nào cần sự kiện onclick thì 
        //     // dùng tới thằng này để làm liên lạc . Bố liên lạc với con bởi props , và thường
        //     // các con là presentational Component , vì vậy chỉ có trách nhiệm hiển thị vốn đã không có nhiều
        //     // ý nghĩa 
        // }
    }

    // onDishSelected(dish){ // hàm sẽ thay đổi state mõi khi thực hiện click ; sẽ gán trạng thái hiện tại bởi 1 dish
    //     // mà được chọn hiện tại 
    //     this.setState({selectedDish: dish}); 
    // }

    // renderDish(dish){
    //     if(dish != null){
    //         return(
    //             <div className="col-12 col-md-5 col-lg-4 mb-5 m-1">
    //             <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //             </div>
    //         );
    //     }else{
    //         return (
    //             <div></div>
    //         );
    //     }
    // }

    render(){ // phương thức render ( kết xuất và chắc chắn sẽ return ra 1 cái gì đó !)

        const menu = this.props.dishes.map((dish)=>{ // dishes ở Menu ( App.js ) => dishes ; 
            return (
                <div key={dish.id} className="col-xs-12 col-sm-6 col-lg-3 mt-3">
                    {/* <Card onClick={()=> this.props.onClick(dish.id)} */}
                    <Card
                        onClick={()=> this.props.onClick(dish.id)}>
                        {/* this.props.onClick => Sự kiện xảy ra tại thằng mẹ của nó : MainComponent */}
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
        

        return( // luôn trả ra ???
            <div className="container">
                <div className="row">
                    {menu} 
                </div>
                {/* <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div> */}
            </div>
        ); 
    }
}

export default MenuComponent ; 