<template>
  <v-app 
    class="d-flex 
    align-center justify-center" 
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
        <v-card-text class="text-center">
          <div class="text-h5 mb-6">
            Bem-vindo à Home
          </div>
          <div 
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mb-4"
          >
            <span>Login</span>
            <router-link 
              to="/login" 
              class="text-blue text-decoration-none"
            >
              Entrar
            </router-link>
          </div>
          <div 
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mb-4"
          >
            <span>Registrar-se</span>
            <router-link 
              to="/register-user" 
              class="text-blue text-decoration-none"
            >
              Registrar
            </router-link>
          </div>
          <div>
            <p>Aqui você pode adicionar informações iniciais, imagens ou outras ações da sua aplicação.</p>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
    <v-footer 
      class="pa-4" 
      color="grey lighten-4"
    >
      <span class="text-body-2">HelpingToGrowth ©2025</span>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

</script>

<style scoped>
/* Ajustes adicionais de estilo, caso necessário */
</style>