import axios from 'axios'
import store from '../store'

const http = axios.create({
    baseURL:'http://localhost:8888/'
    // baseURL: 'https://ts-confectionery.herokuapp.com',
})

http.interceptors.request.use(function (config) {
    const { token } = store.state;
    if (token) {
        config.headers.token = `${token}`
    }
    return config
}, function (erro) {
    return Promise.reject(erro)
})

export default http
