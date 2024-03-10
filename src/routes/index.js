import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Portfolio from '../pages/Portfolio.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/portfolio', component: Portfolio },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
