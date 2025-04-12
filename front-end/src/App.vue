<template>
  <v-app>
    <!-- Header: Coloquei o Header aqui -->
    <Header />

    <!-- Conteúdo da rota atual -->
    <router-view />

    <!-- Footer: Coloquei o Footer aqui -->
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
// Importando os componentes Header e Footer
import Header from '@views/Header.vue'
import Footer from '@views/Footer.vue'
</script>

<style scoped>
/* Estilos globais ou específicos do seu app */
</style>
