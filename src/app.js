import Vue from 'vue'
import Button from "/src/button";
import Icon from "./icon";
import ButtonGroup from "./buttonGroup";
Vue.component('s-button-group',ButtonGroup)
Vue.component('s-button',Button)
Vue.component('s-icon',Icon)
new Vue({
    el:'#app',
    data:{
        loading1:false,
    }
})
