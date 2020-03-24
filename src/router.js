import axios from "axios";
import Vue from "vue";
import VueRouter from "vue-router";
import * as pages from "./pages";

Vue.use(VueRouter);

const routes = [
	{path: "/", component: pages.Home},
	{path: "*", component: pages.Error404}
];

export function getRouter() {
	let router = new VueRouter({routes, mode: "history"});

	// router interceptor to check token for protected pages
	router.beforeEach((to, from, next) => {
		if(to.meta.protected){
			axios.get("http://localhost/auth/token")
			.then((r) => {
				next();
			})
			.catch((e) => {
				next("/");
			});
		}
		else{
			next();
		}
	});

	return router;
}
