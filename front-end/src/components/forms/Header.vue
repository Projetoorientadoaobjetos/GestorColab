<template>
  <v-app-bar 
    app 
    color="primary" 
    dark
  >
    <v-toolbar-title>GestorColab</v-toolbar-title>
  
    <v-spacer />

    <v-btn 
      text 
      to="/login"
    >
      Login
    </v-btn>
    <v-btn 
      text 
      to="/register-user"
    >
      Registrar
    </v-btn>
  </v-app-bar>
</template>
  
  <script setup lang="ts">
  
  </script>
  
  <style scoped>

  </style>
  