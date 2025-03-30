<template>
  <v-app class="d-flex align-center justify-center" style="min-height: 100vh">
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
      >
        <div class="text-subtitle-1 text-medium-emphasis">E-mail</div>

        <v-text-field
          density="compact"
          placeholder="E-mail"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between; align"
        >
          Senha
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Informe sua senha"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <div class="d-flex justify-end pt-2 pb-6">
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Esqueceu sua senha?</a
          >
        </div>

        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block>
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Registre-se <v-icon icon="mdi-chevron-right"></v-icon>
          </a>

          <div>
            <p>Já possue uma conta?</p>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>
<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
