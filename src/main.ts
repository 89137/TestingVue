import './assets/main.css'

import { createApp } from 'vue'
import Primevue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import App from './App.vue'
import router from './router/router'
import { definePreset } from '@primeuix/themes'
import { ToastService } from 'primevue'



const MyPreset = definePreset(Aura, {
  semantic: {
}
})

const app = createApp(App)

app.use(router);
app.use(ToastService);

app.use(Primevue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: 'system'
    }
  }
})

app.mount('#app')
