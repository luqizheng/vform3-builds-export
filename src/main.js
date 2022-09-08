import { createApp } from "vue";
import App from "./App.vue";
import './utils/require'
import "ant-design-vue/dist/antd.css";
import axios from "axios";
import Antd from "ant-design-vue";



import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import DevelopCompents from '../lib'
import CoderMember from 'coder-member-components-vue3'

createApp(App).
    use(DevelopCompents, { path: 'http://localhost:5000', request: axios })
    .use(CoderMember, { path: 'http://192.168.2.5:8080/api/member', request: axios })
    .use(Antd)
    .use(ElementPlus)
    .use(router)
    .mount("#app");

