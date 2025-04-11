/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Import Vue Router
import router from './router'

// Import Vuetify
import vuetify from './plugins/vuetify'

const app = createApp(App)

// Register plugins (including Vuetify and Router)
registerPlugins(app)

// Use Vuetify and Vue Router
app.use(vuetify)  // Adicionando Vuetify
app.use(router)   // Adicionando o Vue Router

// Mount the app
app.mount('#app')
