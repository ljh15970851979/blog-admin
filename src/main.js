import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "./plugins/element.js";
import "@/assets/css/global.styl";
// import echarts from "echarts";
// import BaiduMap from 'vue-baidu-map'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
	debug: true,
	connection: 'http://lizhch.cn:3000/websocket/robot',  //
}))

// Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
// Vue.use(BaiduMap,{
//   ak: 'Q3fm5rg53XNi2WIai76CiiK3DLDhFo0u'
// })
// Vue.nextTick(function () {
//   var script = document.createElement("script");
//   script.src ="http://api.map.baidu.com/api?v=2.0&ak=Q3fm5rg53XNi2WIai76CiiK3DLDhFo0u&callback=initialize";
//   document.body.appendChild(script);
// })
window.$router = router;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
