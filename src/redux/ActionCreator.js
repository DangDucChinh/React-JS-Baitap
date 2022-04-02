import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
export const addComment = (dishId, rating, author, comment)=>({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});


// trả ra 1 hàm chứ không trả ra 1 obj , đây là redux thunk
export const fetchDishes = ()=>(dispatch)=>{
    dispatch(dishesLoading(true)) ;
    //1. Trước tiên tải món ăn với true ;

    setTimeout(()=>{
        dispatch(addDishes(DISHES));
        
    },2000) ;
    //2. Tạo sự chậm trễ tốn 2 s 


    //=> Thunk thực hiện 2 vc : đầu tiên xem DishesLoading làm được gì
    // trong 1 thời gian ngắn, thứ 2 là sau 2 s trì hoãn, nó gửi
    // Adđishes, vì vậy nó sẽ đẩy các món ăn vào trạng thái của cửa hàng

}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
    // trả về 1 hành động của các loại ActionTypes.Dishs_Loading
    //thông báo được nạp , vì vậy cần phải đợi cho các món ăn được nạp
    // Ko có payload
});


//trả về 1 action obj
export const dishesFailed = (errmess)=>({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});


export const addDishes = (dishes)=>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
