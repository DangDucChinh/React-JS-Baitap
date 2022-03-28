import {COMMENTS} from '../shared/comments';
import {DISHES} from '../shared/dishes';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotion';

export const initialState = {
        dishes: DISHES,
        comments: COMMENTS , 
        promotion: PROMOTIONS , 
        leaders: LEADERS ,
};

// trạng thái ban đầu ?? 
// statte = ini... là mặc định 
export const Reducer = (state = initialState, action) => {
    return state ; 
}