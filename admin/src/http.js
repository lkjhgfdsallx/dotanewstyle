import axios from 'axios';
import Vue from 'vue';
import router from './router'


const http = axios.create({
	//baseURL:'http://localhost:3000/admin/api'
	baseURL: process.env.VUE_APP_API_URL || '/admin/api',
})

http.interceptors.request.use(function (config) {
    // Do something before request is sent
	if(localStorage.token){
		config.headers.Authorization = 'bearer ' + localStorage.token
	}
	
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


http.interceptors.response.use(res => {
	return res
}, err => {
	if(err.response.data.message){
		Vue.prototype.$message({
			type : 'error',
			message : err.response.data.message
		})
		
		if(err.response.status){
			router.push('/login')
		}
		
	}
	return Promise.reject(err)
})

export default http