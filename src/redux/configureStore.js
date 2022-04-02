import {createStore, combineReducers, applyMiddleware
} from 'redux' ; 
// cho phép tạo redux store 
import {Dishes} from './dishes';
import {Leaders} from './leaders'
import {Promotions} from './promotions';
import {Comments} from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


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
        }),
        
        applyMiddleware(thunk, logger)
    ); // cấu hình và tạo  1 store

    return store ; 
}
