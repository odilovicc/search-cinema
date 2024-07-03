import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FormInput from '@/components/form/FormInput.vue'
import Card from "@/components/ui/Card.vue";
import Button from '@/components/ui/Button.vue'
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(router)
app.use(VueLazyload, {
    preLoad: 1.3,
})

app.component("FormInput", FormInput)
app.component("Card", Card)
app.component("Button", Button)
app.mount('#app')
