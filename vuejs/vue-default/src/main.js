import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//모든 컴포넌트에서 사용할ㄸㅐ...
import VueSweetAlert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router)
app.use(VueSweetAlert2);
app.mount('#app')
