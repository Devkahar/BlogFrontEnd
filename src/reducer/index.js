import { combineReducers } from "redux";
import {loginReducer} from './auth.reducer'
const rootReducer = combineReducers({
    userLogin: loginReducer,
});

export default rootReducer;