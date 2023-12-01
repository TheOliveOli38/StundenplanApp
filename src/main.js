import { createApp } from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import App from "./App.vue";
import TheHeader from "./components/header/TheHeader.vue";
import BasePlan from "./components/stundenplan/BasePlan.vue";
import PageTitle from "./components/PageTitle.vue";
import store from "./store/index.js";

const app = createApp(App);

app.component("TheHeader", TheHeader);
app.component("BasePlan", BasePlan);
app.component("PageTitle", PageTitle);

app.use(store);
app.use(VueAxios, axios);
app.config.debug = true;
app.config.devtools = true;
app.mount("#app");
