import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

// 开启历史模式
// vue2中使用 mode: history 实现
const routerHistory = 
createWebHashHistory();
// createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
           
            redirect: '/home'
        },
        {
            path: '/home',
            name:'home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/contact',
            name:'contact',
            component: () => import('../views/contact.vue')
        }
    ]
})

export default router