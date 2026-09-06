import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

document.documentElement.classList.add('booting')

/* Animate boot progress while Vue boots. */
;(() => {
  const fill = document.getElementById('boot-fill')
  const pct = document.getElementById('boot-pct')
  if (!fill || !pct) return

  let value = 0
  const push = () => {
    if (value >= 86) return
    value = Math.min(86, value + 4 + Math.random() * 9)
    fill.style.width = `${value}%`
    pct.textContent = String(Math.round(value))
    window.setTimeout(push, 90 + Math.random() * 140)
  }
  push()
})()

const app = createApp(App)

app.use(router)

app.mount('#app')
