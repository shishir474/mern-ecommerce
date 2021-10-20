// export default (state = {name:'Shishir'}, action) => {
//     return state;
// }


import { combineReducers } from 'redux';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;