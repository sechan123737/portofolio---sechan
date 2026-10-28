import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import reveal from './directives/reveal'

// Selalu mulai dari atas (Hero) saat situs pertama kali dibuka,
// meskipun URL masih menyimpan hash (#stack, #projects, dst) dari kunjungan sebelumnya.
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search)
  window.scrollTo(0, 0)
}

const app = createApp(App)
app.directive('reveal', reveal)
app.mount('#app')