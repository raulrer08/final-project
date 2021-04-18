import {createRouter, createWebHistory} from 'vue-router'



import home from './views/Home.vue'
import contactus from './views/contactus.vue'
import login from './views/login.vue'
import search from './views/search.vue'
import register from './views/reg.vue'


const routes = [
    {path: '/', component: home},
    {path: '/contactus', component: contactus},
    {path: '/login', component:login},
    {path: '/search', component:search},
    {path: '/reg', component:register},
    
]

export const router = createRouter(
    {history: createWebHistory(), routes,})