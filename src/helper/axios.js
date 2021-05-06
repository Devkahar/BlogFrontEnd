import axios from 'axios';

const user = window.localStorage.getItem('userInfo') || null;
const instance = axios.create({
    headers: {
        authorization:  user? `Bearer ${user.token}`:''
    }
})
export default instance;