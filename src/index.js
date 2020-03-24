import Vue from "vue";
import Vuex from "vuex";

import {addAxiosInterceptors} from "./axios.js";
import {getRouter} from "./router.js";
import {getI18n} from "./i18n.js";
import NewStore from "./store/store.js";

Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.config.devtools = false;
addAxiosInterceptors();

// main component
new Vue({
	el: "#app",
	store: NewStore(),
	router: getRouter(),
	i18n: getI18n()
});
