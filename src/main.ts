import { createApp } from 'vue'
import './style.css'
import './assets/theme.css'
import './assets/article.css'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
import directiveList from './directives/directives';
import Aura from '@primevue/themes/aura';

const app = createApp(App)


directiveList.forEach(directive => {
	directive.register(app)
})

app.use(PrimeVue, {
	theme: {
        preset: Aura
    }
})
app.use(router)
app.mount('#app')
