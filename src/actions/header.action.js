import { actions } from "../constants";

export const headerActions = {
    headerUpdateTrigger,
    updateBNBAmount
};

function headerUpdateTrigger(val) {
    return dispatch => dispatch({ type: actions.CONTRACTCALL, payload: val });
}

function updateBNBAmount(val) {
    return dispatch => dispatch({ type: actions.UPDATEBNBAMOUNT, payload: val });
}