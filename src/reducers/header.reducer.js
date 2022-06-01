import { actions } from "../constants";

const initialState = {
    methodCallType:0,
    bnbAmount: 0,
};

export function header_reducer(state = initialState, action) {
    switch (action.type) {
        case actions.CONTRACTCALL:
            return {
                ...state, 
                methodCallType:action.payload
            };
        case actions.UPDATEBNBAMOUNT:
            return {
                ...state,
                bnbAmount: action.payload
            }
        default:
            return state
    }
}