import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
