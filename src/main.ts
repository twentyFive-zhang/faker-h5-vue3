import { createApp } from 'vue'
import App from './App'
import vConsole from "vconsole";
import router from './router';
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import './styles/index.less'

const pinia = createPinia()
pinia.use(piniaPersist)

// const vconole = new vConsole()


createApp(App).use(router).use(pinia).mount('#app')
