import HomePage from './components/HomePage.vue';
import AddNewStudents from './components/AddNewStudents.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'AddNewStudents',
        component: AddNewStudents,
        path: '/add-newstudents'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
// add it with main.js