import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

createApp(App).use(router).mount('#app')
