import { createRouter, createWebHistory } from 'vue-router'
import Main from './pages/Main.vue'
import Project from './pages/Project.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main,
    },
    {
        path: '/project/:projectId',
        name: 'Project',
        component: Project,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router