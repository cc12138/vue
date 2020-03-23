// 入口文件
// console.log('ok');
// 

import Vue from 'vue';

import { Header } from 'mint-ui';
import './lib/mui/css/mui.css'

Vue.component(Header.name, Header);
// 导入App组件
import app from './App.vue';

var vm = new Vue({
    el: '#app',
    render: e => e(app)
})