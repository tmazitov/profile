import { createRouter, createWebHistory } from 'vue-router'
import Project from './pages/Project.vue'
import ProjectList from './pages/ProjectList.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue'),
    },
    {
        path: '/project/:projectId',
        name: 'project',
        component: Project,
    },
    {
        path: '/project',
        name: 'project-list',
        component: ProjectList,
    },

]
const router = createRouter({
    history: createWebHistory("/profile/"),
    routes,
})
export default router