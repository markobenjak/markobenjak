import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from "vue";
import App from './App.vue'
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "Hrvatski",
    fallbackLocale: "English",
    availableLocales: ["English", "Hrvatski"],
    messages: messages,
  });


createApp(App).use(i18n).mount('#app')

