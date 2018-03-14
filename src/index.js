import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import axios from "axios";
import * as pages from "./pages";

Vue.use(VueRouter);
Vue.use(Vuex);

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

const routes = [
	{path: "/", component: pages.Home},
	{path: "*", component: pages.Home} // TODO 404
];

new Vue({
	el: "#app",
	router: new VueRouter({routes, mode: "history"})
});
