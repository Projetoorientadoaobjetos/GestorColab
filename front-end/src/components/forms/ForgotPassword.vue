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
        <div 
          class="text-subtitle-1 text-medium-emphasis"
        >
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

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");

// Regras de validação para o e-mail
const emailRules = [
  (v: string) => !!v || "E-mail é obrigatório",
  (v: string) => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
];

// Função para lidar com a redefinição de senha
const handleResetPassword = () => {
  if (email.value) {
    console.log("Redefinindo senha para e-mail:", email.value);
    // Aqui, simula-se um processo de redefinição de senha
    // Após o sucesso, redireciona para a tela de login
    router.push("/");
  } else {
    console.log("E-mail não fornecido");
  }
};
</script>

<style scoped></style>
