import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PhosporIcons from "@phosphor-icons/vue";

createApp(App).use(router).use(store).use(PhosporIcons).mount("#app");
