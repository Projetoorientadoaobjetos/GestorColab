/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_OTHER_VAR?: string
  // Adicione aqui as variáveis que você usa no import.meta.env
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
