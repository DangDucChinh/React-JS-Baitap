import React,{Component} from "react";
import {Card, CardText ,CardImg, CardImgOverlay, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import {Link} from 'react-router-dom' ; 
function RenderMenuItem ({dish, aClick}) {  
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}


    //1. Đầu tiên tạo hàm Menu , truyền tham số (props)
    //2. dùng props- lúc này là một mảng dishes - tiến hành lấy các phần tử dish trong dishes
    const Menu = (props) => {
    //function Menu(props){ 
    //    console.log(props) ; 
    const menu = props.dishes.map((dish) => {
    // const menu = this.props.dishes.map((dish) => { // ko sử dụng this dc do là arrowfunction 
    // 3. <RenderMenuItem là 1 hàm mới được tạo . truyền dish và event onClick vào cho hàm : dish = dish , onClick
    // thì là toiClick của props, tức bên trên nó phải có properties toiClick !!!
        return (
            <div className="col-xs-12 col-sm-6 col-lg-3 mt-3"  key={dish.id}>
                <RenderMenuItem dish={dish} />
                
            </div>
        );
    });
    //4. Hành vi <RenderMenuItem> có thuộc tính aclick : 
    //4.1 gọi RenderMenuItem , truyền dish và aclick
    //4.2 khi có onClick của Card thì aClick return dish.id trả cho props.toiClick 
    //4.3 toiClick có dish.id , do đó toiClick={(dishId)=> this.setStateSelect(dishId)} làm thay đổi seletedId tại
    // MainComponent

    //5. Hàm menu có kết quả trả ra là 1 return 
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menues</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;