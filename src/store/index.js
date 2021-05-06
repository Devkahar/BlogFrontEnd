import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer  from '../reducer/index';
import thunk from 'redux-thunk';

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)));

export default store;