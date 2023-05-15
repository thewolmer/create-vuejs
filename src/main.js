import './assets/main.css'
import './components/icons/css/boxicons.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
import { MotionPlugin } from '@vueuse/motion'
import { useDark } from "@vueuse/core"

const app = createApp(App)

app.use(router)
app.use(VueGtag, {
    config :{ id: "G-yourGoogleAnalyticscode"}
})
app.use(MotionPlugin)
app.use(useDark)

app.mount('#app')
