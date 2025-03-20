import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { createI18n } from "vue-i18n";

const messages = {
  ja: {
    message: {
      field1: "製品名（日本語）",
      field2: "製品名（英語）",
      field3: "ブランド名",
      field4: "標準ID",
    },
  },
  ko: {
    message: {
      field1: "제품명(일본어)",
      field2: "제품명(영어)",
      field3: "브랜드명",
      field4: "표준 ID",
    },
  },
};

const i18n = createI18n({
  locale: "ja",
  messages,
  legacy: false,
});

createInertiaApp({
  resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob("./pages/**/*.vue")),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .use(i18n)
      .use(PrimeVue, {
        theme: {
          preset: Aura,
        },
      })
      .mount(el);
  },
});
