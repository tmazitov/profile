import { createRouter, createWebHistory } from 'vue-router'
import Main from './pages/Main.vue'
import Project from './pages/Project.vue'
import ProjectList from './pages/ProjectList.vue'

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
    {
        path: '/project',
        name: 'ProjectList',
        component: ProjectList,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router