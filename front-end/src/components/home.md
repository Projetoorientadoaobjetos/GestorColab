# 🏠 Home.vue – Documentação Explicativa Completa

Este documento explica detalhadamente o código da página `Home.vue`, que representa a interface principal de um projeto educacional voltado para inclusão digital, com foco especial em pessoas idosas. A estrutura é construída com **Vue 3**, **Vuetify 3** e **TypeScript**.

---

## 🔹 Estrutura do Componente

```vue
<template>...</template>
<script setup lang="ts">...</script>
<style scoped></style>
```

A estrutura usa a composição com `<script setup>` e estilo escopado. O layout principal está contido dentro do componente `<v-app>`, base do Vuetify.

---

## 📌 Seções Detalhadas

### 1. ✅ Container Principal

```vue
<v-container class="mt-10" fluid>
```

- Proporciona espaçamento superior (`mt-10`)
- `fluid` permite que ocupe 100% da largura disponível

---

### 2. 🗣️ Seção – Depoimentos de Alunos

```vue
<v-card elevation="3" class="pa-8 mb-6" color="#ffffff" rounded="lg">
```

- **Título:** "Depoimentos de Alunos"
- Organizado com `v-row` e `v-col` responsivo
- Depoimento exibido dentro de `v-card` com destaque de borda azul esquerda
- Uso de `v-icon` (mdi-format-quote-open)
- `v-avatar` com iniciais do nome

#### Conteúdo do Depoimento:

> "Depois de anos me sentindo intimidada por computadores, finalmente encontrei um lugar onde posso aprender no meu próprio ritmo..."

---

### 3. 📅 Seção – Próximos Eventos

```vue
<v-card elevation="3" class="pa-6" color="#ffffff" rounded="lg">
```

- **Título:** "Próximos Eventos"
- Cada evento é representado por um `v-card` com:
  - `v-card-title`
  - `v-card-subtitle`
  - `v-card-text`
  - Botão: `v-btn` com texto "Inscreva-se"

#### Eventos Exibidos:

- **Webinar: Introdução à Programação** (10/10/2024 - 19h)
- **Workshop: Ferramentas Digitais para o Trabalho** (15/10/2024 - 14h)

---

### 4. 🎓 Seção – Cursos em Destaque

```vue
<v-card elevation="3" class="pa-6" color="#ffffff" rounded="lg">
```

- **Três cursos** exibidos em colunas com imagens de fundo:
  - **Introdução à Informática**
  - **Redes Sociais para Iniciantes**
  - **Office 365 para o Dia a Dia**
- Imagens com `v-img` e sobreposição escura (`rgba(0, 0, 0, 0.5)`)
- Botão "Saiba Mais" em cada curso

#### Características:

- `position: absolute` + `z-index` para sobreposição
- Layout responsivo com `md="4"` (coluna por curso)

---

### 5. 📬 Seção – Formulário de Contato

```vue
<v-card elevation="3" class="pa-6" color="#ffffff" rounded="lg">
```

- **Título:** "Entre em Contato"
- Campos do formulário com `v-text-field` e `v-textarea`
- Botão de envio com `v-btn` (sem lógica de envio implementada)

#### Campos:

- Nome
- Email
- Mensagem

---

## 🖌️ Estilo e Design

- **Cores principais:**
  - Azul escuro: `#1e40af`, `#1976d2`
  - Azul claro: `#3b82f6`, `#bfdbfe`
  - Neutros: `#f8fafc` (fundo), `#334155` (texto)

- **Tipografia:**
  - Títulos com `text-h4`, `text-h5`
  - Fontes com `font-weight-bold` para ênfase

- **Estética:**
  - `rounded="lg"` para bordas arredondadas
  - `elevation` para profundidade
  - Padding (`pa-*`) e margin (`mb-*`) bem definidos

---

## 📁 Tecnologias Usadas

- Vue 3 + Script Setup (TypeScript)
- Vuetify 3 (UI Framework)
- Layouts e roteamento via plugins (`vite-plugin-vue-layouts`, `unplugin-vue-router`)
- Design Mobile First com Vuetify Grid (`v-row` / `v-col`)

---
