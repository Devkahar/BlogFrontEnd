import axios from 'axios';
import {userConstants} from './constants';

const login  =  (email,password) => async(dispatch)=> {
    try {
        const { data } = await axios.post('http://localhost:5000/api/users/login',{ email, password })
          dispatch({
            type: userConstants.USER_LOGIN_SUCCESS,
            payload: data,
          })
          localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: userConstants.USER_LOGIN_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
};


export {login}