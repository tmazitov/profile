import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue'),
    },
    {
        path: '/project/:projectId',
        name: 'project',
        component:  () => import('./pages/Project.vue'),
    },
    {
        path: '/project',
        name: 'project-list',
        component:  () => import('./pages/ProjectList.vue'),
    },

]
const router = createRouter({
    history: createWebHistory("/profile/"),
    routes,
})
export default router