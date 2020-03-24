import axios from "axios";

export function addAxiosInterceptors() {
	// reponse error handler
	axios.interceptors.response.use(undefined, err => {
		if(err.response.data.error){
			console.log(err.response.data.error);
		}
		
		return Promise.reject(err);
	});

	// token interceptor for every request
	axios.interceptors.request.use((config) => {
		const token = window.localStorage.getItem("token");

		if(token){
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	}, (err) => {
		return Promise.reject(err);
	});
}
