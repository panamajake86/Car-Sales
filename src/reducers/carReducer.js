import { ADD_FEATURE, UPDATE_TOTAL, REMOVE_FEATURE } from '../actions';

export const initialState = {

}

export const carReducer = (state, action) => {
    switch(action.type) {
        case ADD_FEATURE:
            return {
                ...state
        };
        case UPDATE_TOTAL:
            return {
                ...state
        };
        case REMOVE_FEATURE:
            return {
                ...state
        };
        default:
            return state;
    }
};