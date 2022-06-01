import { combineReducers } from 'redux';

// import { authentication } from './authentication.reducer';
// import { registration } from './registration.reducer';
// import { users } from './users.reducer';
import { header_reducer } from './header.reducer';

const rootReducer = combineReducers({
    header_reducer
    // registration,
    // users,
    // alert
});

export default rootReducer;