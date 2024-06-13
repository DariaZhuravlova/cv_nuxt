import {createI18n} from "vue-i18n";
import en from "~/locales/en.json";
import uk from "~/locales/uk.json";

export default defineNuxtPlugin(({vueApp}) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: "uk",
        messages: {
            en,
            uk,
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root',
        }
    });

    vueApp.use(i18n);
});
