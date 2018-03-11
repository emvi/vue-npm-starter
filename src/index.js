import Vue from "vue";
import VueRouter from "vue-router";
import * as pages from "./pages";

Vue.use(VueRouter);

const routes = [
	{path: '/', component: pages.Home},
	{path: '*', component: pages.Home} // TODO 404
];

new Vue({
	el: "#app",
	router: new VueRouter({routes})
});
