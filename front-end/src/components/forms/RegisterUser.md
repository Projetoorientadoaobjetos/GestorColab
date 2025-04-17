# 📝 RegisterUser.vue — Tela de Registro de Usuário

Este componente é responsável por permitir que um novo usuário se registre na aplicação. Inclui campos para e-mail, confirmação de e-mail, senha e confirmação de senha, todos com regras de validação.

---

## 🧱 Template — Estrutura Visual

```vue
<template>
  <v-app fluid class="d-flex align-center justify-center" style="min-height: 100vh">
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
        <!-- Campo de E-mail -->
        <div class="text-subtitle-1 text-medium-emphasis">E-mail</div>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          density="compact"
          placeholder="Digite seu e-mail"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        />

        <!-- Campo de Confirmação de E-mail -->
        <div class="text-subtitle-1 text-medium-emphasis">Confirmação E-mail</div>
        <v-text-field
          v-model="confirmaEmail"
          :rules="emailconfirmRules"
          density="compact"
          placeholder="Confirme seu e-mail"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        />

        <!-- Campo de Senha -->
        <div class="text-subtitle-1 text-medium-emphasis">Senha</div>
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

        <!-- Campo de Confirmação de Senha -->
        <div class="text-subtitle-1 text-medium-emphasis">Confirmação Senha</div>
        <v-text-field
          v-model="confirmPassword"
          :rules="passwordconfirmRules"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Confirme sua senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        />

        <!-- Link para redefinir senha -->
        <div class="d-flex justify-end pt-2 pb-6">
          <router-link
            to="/forgot-password"
            class="text-caption text-decoration-none text-blue"
          >
            Esqueceu sua senha?
          </router-link>
        </div>

        <!-- Botão de Registro -->
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="validateForm"
        >
          Registrar
        </v-btn>

        <!-- Link para fazer login -->
        <v-card-text class="text-center">
          <router-link to="/login" class="text-blue text-decoration-none">
            Já possui conta? Faça login
            <v-icon icon="mdi-chevron-right" />
          </router-link>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>
