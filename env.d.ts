/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts/client" />

// Declaração para as variáveis de ambiente personalizadas
interface ImportMetaEnv {
    VITE_APP_TITLE: string;
    VITE_API_URL: string;
    // Adicione outras variáveis de ambiente que você está usando
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  