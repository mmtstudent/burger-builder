import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-df257.firebaseio.com/'
})

export default instance;
