import axios from 'axios'
import store from '../store'

const http = axios.create({
    baseURL: 'http://ts-confectionery.herokuapp.com',
    headers:{
        "Content-Type": "application/json"
    }
})

http.interceptors.request.use(function (config) {
    const { token } = store.state;
    if (token) {
        config.headers.Authorization = `${token}`
    }
    return config
}, function (erro) {
    return Promise.reject(erro)
})

export default http
