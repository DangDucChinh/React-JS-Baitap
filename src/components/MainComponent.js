import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import { DISHES } from '../shared/dishes2';
import DishDetailComponent from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES, // thằng này để hiện thị menu 
            selectedDish: null // thằng này dùng để hiện thị món ăn được chọn qua props , cụ thể ở đây thì nó truyền ID dish
        }
        
    }
    setStateSelect(dishId){
        this.setState({ selectedDish: dishId });
    }
    render() {
        return (
            <div>
                <Header />
                <MenuComponent dishes={this.state.dishes} // thuộc tính dish truyền vào thì bằng statte ( mảng dish )
                    // tung ra sự kiện click nhằm thay đổi trạng thái của seletctedDish , tức khi nhấn thì chắc chắn có dish được chọn
                    // Id trên dish đó sẽ đc props dùng cho mục đích của dishDetail 
                    toiClick={(dishId)=> this.setStateSelect(dishId)} />  

                
                <DishDetailComponent // truyền vào Id đã nhận được từ trc , thể hiện nó ra bằng cách tìm id đó
                    // lọc Id từ state( trạng thái ) dishes và lấy ra chúng.
                    dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)}
                    // 1.dùng filter lọc các dish từ mảng dishes . 
                    // 2.filter sẽ phân rã ra các dish
                    // 3. truyền dish vào ra kiểm tra , return ra dish.id nào = selectedDish
                    // 4. dish = ( gán bởi) dish.id mà trùng với selectedDish ( tức id của Card được chọn) 
                />
                <Footer />  
            </div>
        );
    }
}

export default MainComponent;
