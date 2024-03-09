import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import directiveList from './directives/directives';

const app = createApp(App)


directiveList.forEach(directive => {
	directive.register(app)
})

app.use(router)
app.mount('#app')
