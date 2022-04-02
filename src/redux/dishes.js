import * as ActionTypes from './ActionTypes';
export const Dishes = (state= {
    isLoading: true, // tai thong tin món ăn từ nơi nào đó trc 
    // khi chi tiết món ăn có sẵn trong state
    errMess: null, // khi nhận đucợ action DISHES_FAILED tại case 
    // nếu ko thì là null
    dishes: [] // nạo món ăn 


    // lấy tt món ăn từ mấy chủ, khi có tt rồi thì chuyển isLoading thành false
    // sau dó tải nó vào dishes
}, action)=>{
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes:action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes:[]};

        default: return state ;
    }
}