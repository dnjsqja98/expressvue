// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import VueSplash from "vue-splash";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(VueSplash);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

new Vue({
  el: "#test",
  router,
  components: { test },
  template: "<test/>"
});

new Vue({
  el: "#main",
  router,
  components: { main },
  template: "<main/>"
});

new Vue({
  el: "#app",
  methods: {
    fetchData: function() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
