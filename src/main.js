import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import Message from './components/message/index.js';


app.config.globalProperties.$message = Message;
const app = createApp(App)
app.use(router)
app.use(store) // 使用 vuex
app.mount('#app')
