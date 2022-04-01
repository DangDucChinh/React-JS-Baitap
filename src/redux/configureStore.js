import {createStore, combineReducers} from 'redux' ; 
// cho phép tạo redux store 
import {Dishes} from './dishes';
import {Leaders} from './leaders';
import {Promotions} from './promotions';
import {Comments} from './comments';



// tạo 1 cửa hàng 
export const ConfiguresStore = () =>{
    const store = createStore(
        // Reducer,
        // initialState
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotion: Promotions,
            leaders: Leaders
        })
    ); // cấu hình và tạo  1 store

    return store ; 
}
