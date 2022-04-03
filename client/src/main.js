import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import elementIcons from './plugins/element-icons'
import Icon from '@/components/Icon'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')

//全局icon
elementIcons(app)
app.component('Icon', Icon)