import Vue from 'vue'
import App from './App'

new Vue({
    el:'#app',
    render: aplica => aplica(App)
})//no lugar do el pode usar aqui o .$mount("#app")
