import axios from 'axios';

const token = window.localStorage.getItem('token') || null;
const instance = axios.create({
    headers: {
        authorization:  token? `Bearer ${token}`:''
    }
})
export default instance;