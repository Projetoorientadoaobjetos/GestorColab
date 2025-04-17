# 📄 ResetPassword.vue — Tela de Redefinição de Senha

Este componente representa a **tela de recuperação de senha** do sistema. É uma interface clara, objetiva e centrada na experiência do usuário.

---

## 🧱 Estrutura do Template

```vue
<template>
  <v-app
    fluid
    class="d-flex align-center justify-center"
    style="min-height: 100vh"
  >
    <v-container
      fluid
      class="pa-0 d-flex align-center justify-center"
      style="min-height: 100vh; background-color: lightblue"
    >
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
        style="width: 100%"
        color="white"
      >
        <div class="text-subtitle-1 text-medium-emphasis">
          E-mail
        </div>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          density="compact"
          placeholder="Digite seu e-mail"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        />

        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="handleResetPassword"
        >
          Redefinir senha
        </v-btn>
      </v-card>
    </v-container>
  </v-app>
</template>
