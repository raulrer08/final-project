import {createRouter, createWebHistory} from 'vue-router'



import home from './views/Home.vue'
import info from './views/info.vue'
import login from './views/login.vue'
import search from './views/search.vue'
import register from './views/reg.vue'


const routes = [
    {path: '/', component: home},
    {path: '/info', component: info},
    {path: '/login', component:login},
    {path: '/search', component:search},
    {path: '/reg', component:register},
    
]

export const router = createRouter(
    {history: createWebHistory(), routes,})