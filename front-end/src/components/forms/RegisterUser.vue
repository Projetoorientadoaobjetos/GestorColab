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

        <div class="text-subtitle-1 text-medium-emphasis">
          Confirmação E-mail
        </div>

        <v-text-field
          v-model="confirmaEmail"
          :rules="emailconfirmRules"
          density="compact"
          placeholder="Confirme seu e-mail"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        />

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

        <div class="text-subtitle-1 text-medium-emphasis">
          Confirmação Senha
        </div>

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

        <div class="d-flex justify-end pt-2 pb-6">
          <router-link
            to="/forgot-password"
            class="text-caption text-decoration-none text-blue"
          >
            Esqueceu sua senha?
          </router-link>
        </div>

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
import { useRouter } from "vue-router";

// Variáveis de controle
const router = useRouter();
const visible = ref(false);
const email = ref("");
const confirmaEmail = ref("");
const password = ref("");
const confirmPassword = ref("");

// Regras de validação para o e-mail
const emailRules = [
  (v: string) => !!v || "E-mail é obrigatório",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
  (v: string) => v.length <= 50 || "O e-mail deve ter no máximo 50 caracteres",
];

const emailconfirmRules = [
  (v: string) => !!v || "E-mail é obrigatório",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
  (v: string) => v === email.value || "Os e-mails não coincidem",
  (v: string) => v.length <= 50 || "O e-mail deve ter no máximo 50 caracteres",
];

// Regras de validação para a senha
const passwordRules = [
  (v: string) => !!v || "Senha é obrigatória",
  (v: string) => v.length >= 6 || "A senha deve ter no mínimo 6 caracteres",
  (v: string) => v.length <= 40 || "O e-mail deve ter no máximo 40 caracteres",
];

const passwordconfirmRules = [
  (v: string) => !!v || "Senha é obrigatória",
  (v: string) => v.length >= 6 || "A senha deve ter no mínimo 6 caracteres",
  (v: string) => v === password.value || "A senha não coincide",
  (v: string) => v.length <= 40 || "O e-mail deve ter no máximo 40 caracteres",
];

// Função para validar o formulário e redirecionar para a home
const validateForm = () => {
  if (email.value && password.value) {
    console.log("Formulário validado");
    // Redirecionar para a página inicial após o registro bem-sucedido
    router.push("/");
  } else {
    console.log("Formulário inválido");
  }
};
</script>

<style scoped></style>
