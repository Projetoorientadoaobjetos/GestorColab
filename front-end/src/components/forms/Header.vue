<template>
  <v-app-bar 
    app 
    color="blue" 
    dark 
    elevation="4"
  >
    <v-container class="d-flex align-center">
      <!-- Logo / Título -->
      <v-toolbar-title class="font-weight-bold">
        <v-btn 
          text 
          to="home-page"
        > 
          HelpingToGrowth 
        </v-btn>
      </v-toolbar-title>

      <v-spacer />

      <!-- Menu de navegação principal -->
      <v-btn 
        text 
        to="/" 
        class="mx-2"
      > 
        Início 
      </v-btn>
      <v-btn 
        text 
        to="/cursos" 
        class="mx-2"
      > 
        Cursos 
      </v-btn>
      <v-btn 
        text 
        to="/planos" 
        class="mx-2"
      > 
        Planos 
      </v-btn>
      <v-btn 
        text 
        to="/comunidade" 
        class="mx-2"
      > 
        Comunidade 
      </v-btn>
      <v-btn 
        text 
        to="/blog" 
        class="mx-2"
      > 
        Blog 
      </v-btn>
      <v-btn 
        text 
        to="/suporte" 
        class="mx-2"
      > 
        Suporte 
      </v-btn>

      <v-divider 
        vertical 
        class="mx-4" 
        inset 
      />

      <v-btn 
        text 
        to="/" 
        class="mx-1"
      > 
        Login 
      </v-btn>
      <v-btn 
        outlined 
        color="white" 
        to="/register-user" 
        class="mx-1"
      >
        Registrar
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style scoped>
.v-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.2px;
}
</style>
