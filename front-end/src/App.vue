<template>
  <v-app>
    <Header v-if="!hideHeaderFooter" />
    <router-view />
    <Footer v-if="!hideHeaderFooter" />
  </v-app>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const hideHeaderFooter = computed(() => {
  return (
    route.name === "login" ||
    route.name === "registerUser" ||
    route.name === "EsqueceuSuaSenha"
  );
});
</script>
