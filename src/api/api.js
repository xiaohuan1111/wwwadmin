import axios from 'axios'

export const requestLogin = (params) => {return axios.post('/login', params).then(res => res.data)};
export const customerList = (params) => {return axios.get('/customer/list', params)};
export const customerListPage = (params) => {return axios.get('/customer/listPage'),{params: params}}