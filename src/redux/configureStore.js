import {createStore} from 'redux' ; 
// cho phép tạo redux store 
import { Reducer, initialState} from './reducer';


// tạo 1 cửa hàng 
export const ConfiguresStore = () =>{
    const store = createStore(
        Reducer,
        initialState
    ); // cấu hình và tạo  1 store

    return store ; 
}
