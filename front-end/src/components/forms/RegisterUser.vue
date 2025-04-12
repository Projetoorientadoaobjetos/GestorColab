<template>
  <v-app
    fluid
    class="d-flex align-center justify-center"
    style="min-height: 100vh"
  >
    <v-container
      fluid
      class="pa-0 d-flex align-center justify-center"
      style="min-height: 100vh"
    >
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
        style="width: 100%"
        color="white"
      >
        <!-- E-mail -->
        <div class="text-subtitle-1 text-medium-emphasis">
          E-mail
        </div>

        <v-text-field
          v-model="email"
          density="compact"
          placeholder="Digite seu e-mail"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          type="email"
        />

        <!-- Senha -->
        <div class="text-subtitle-1 text-medium-emphasis">
          Senha
        </div>

        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Informe sua senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        />

        <!-- Esqueci minha senha -->
        <div class="d-flex justify-end pt-2 pb-6">
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Esqueceu sua senha?
          </a>
        </div>

        <!-- Botão de Registrar -->
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
          @click="handleRegister"
        >
          Registrar
        </v-btn>

        <!-- Link para o Login -->
        <v-card-text class="text-center">
          <router-link
            to="/login"
            class="text-blue text-decoration-none"
          >
            Já possui conta? Faça login 
            <v-icon icon="mdi-chevron-right" />
          </router-link>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Variáveis de controle
const email = ref('');
const password = ref('');
const visible = ref(false);

// Função de registro (simples exemplo)
const handleRegister = () => {
  if (!email.value || !password.value) {
    alert("Por favor, preencha todos os campos!");
    return;
  }
  // Lógica para registro (futuramente você pode conectar com a API)
  console.log("Registrando usuário com e-mail:", email.value);
  // Navegar para o login após o registro (opcional)
  // router.push('/login');
};
</script>

<style scoped>
/* Ajustes adicionais de estilo, caso necessário */
</style>
