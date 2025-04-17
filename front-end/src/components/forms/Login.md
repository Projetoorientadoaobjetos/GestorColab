# 🔐 LoginUser.vue — Tela de Login

Este componente é responsável pela autenticação do usuário. Ele permite a inserção de e-mail e senha com validações básicas e fornece acesso à tela inicial do sistema.

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
        <!-- Campo de e-mail -->
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

        <!-- Campo de senha -->
        <div class="text-subtitle-1 text-medium-emphasis">
          Senha
        </div>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Informe sua senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        />

        <!-- Link para recuperação de senha -->
        <div class="d-flex justify-end pt-2 pb-6">
          <router-link
            to="/forgot-password"
            class="text-caption text-decoration-none text-blue"
          >
            Esqueceu sua senha?
          </router-link>
        </div>

        <!-- Botão de login -->
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="validateForm"
        >
          Log In
        </v-btn>

        <!-- Link para registro -->
        <v-card-text class="text-center">
          <router-link
            to="/register-user"
            class="text-blue text-decoration-none"
          >
            Registre-se <v-icon icon="mdi-chevron-right" />
          </router-link>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>
