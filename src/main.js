import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import 'tailwindcss/tailwind.css';
import Particles from "vue3-particles"

const app = createApp(App)
app.use(Particles)
app.mount('#app')
