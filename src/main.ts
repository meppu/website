import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import VueTippy from 'vue-tippy'

import 'tippy.js/dist/tippy.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(MotionPlugin)
app.use(VueTippy, {
  directive: 'tippy',
  defaultProps: {
    theme: 'min',
    arrow: false,
    offset: [0, 16],
    placement: 'left'
  }
})

app.mount('#app')
