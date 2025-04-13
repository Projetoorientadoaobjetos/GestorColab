<template>
  <v-footer
    class="text-center d-flex flex-column ga-0 py-0"
    color="blue"
    style="margin: 0; padding: 0; background-color: blue"
  >
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>
    <div class="text-caption font-weight-regular opacity-60">
      A Helping To Growth é dedicada a tornar a tecnologia acessível a todos.
      Nossa plataforma oferece cursos intuitivos, suporte personalizado e uma
      comunidade vibrante onde iniciantes e entusiastas podem aprender de forma
      colaborativa. Da alfabetização digital básica às habilidades técnicas
      avançadas, estamos aqui para apoiar sua jornada tecnológica em cada etapa.
      Junte-se à nossa comunidade hoje e transforme a forma como você interage
      com a tecnologia.
    </div>
    <v-divider></v-divider>
    <div>
      {{ new Date().getFullYear() }} — <strong>Helping To Growth</strong>
    </div>
  </v-footer>
</template>

<script setup>
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
