import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export function getI18n() {
	return new VueI18n({
		locale: "en",
		fallbackLocale: "en"
	});
}
