import Vue from "vue";
import App from "./app.vue";

new Vue({
	el: "#app",
	render: render => render(App),
	components: {App}
});
