<template>
  <v-app>
    <v-container style="min-height: 100vh">
      <!-- Conteúdo da página -->
    </v-container>

    <!-- Footer detalhado que só aparece ao rolar até o final -->
    <v-footer 
      v-if="isAtBottom" 
      app 
      color="blue" 
      dark 
      class="footer"
    >
      <v-container>
        <v-row>
          <!-- Sobre Nós -->
          <v-col 
            cols="12" 
            sm="6" 
            md="3"
          >
            <h4 class="text-h6 mb-2">
              Sobre Nós
            </h4>
            <p class="text-body-2">
              Nossa missão e visão
            </p>
            <p class="text-body-2">
              Equipe de especialistas
            </p>
            <p class="text-body-2">
              História da empresa
            </p>
          </v-col>

          <!-- Cursos -->
          <v-col 
            cols="12" 
            sm="6" 
            md="3"
          >
            <h4 class="text-h6 mb-2">
              Cursos
            </h4>
            <p class="text-body-2">
              Categorias por nível
            </p>
            <p class="text-body-2">
              Temas: Segurança, Escritório...
            </p>
            <p class="text-body-2">
              Detalhes de cada curso
            </p>
          </v-col>

          <!-- Planos e Comunidade -->
          <v-col 
            cols="12" 
            sm="6" 
            md="3"
          >
            <h4 class="text-h6 mb-2">
              Planos & Comunidade
            </h4>
            <p class="text-body-2">
              Gratuito, Básico, VIP
            </p>
            <p class="text-body-2">
              Certificações incluídas
            </p>
            <p class="text-body-2">
              Fóruns & Histórias de sucesso
            </p>
          </v-col>

          <!-- Blog e Suporte -->
          <v-col 
            cols="12" 
            sm="6" 
            md="3"
          >
            <h4 class="text-h6 mb-2">
              Blog & Suporte
            </h4>
            <p class="text-body-2">
              Artigos educativos
            </p>
            <p class="text-body-2">
              Tutoriais rápidos
            </p>
            <p class="text-body-2">
              FAQ e contato
            </p>
          </v-col>
        </v-row>

        <v-divider class="my-6" />

        <v-row 
          justify="space-between" 
          align="center"
        >
          <!-- Copyright -->
          <v-col 
            cols="12" 
            sm="6" 
            class="text-body-2 copyright"
          >
            HelpingToGrowth ©2025 - Todos os direitos reservados
          </v-col>

          <!-- Redes sociais -->
          <v-col 
            cols="12" 
            sm="6" 
            class="d-flex justify-end social-icons"
          >
            <v-btn 
              icon 
              href="#" 
              target="_blank" 
              class="mx-1"
            >
              <v-icon color="white">
                mdi-facebook
              </v-icon>
            </v-btn>
            <v-btn 
              icon 
              href="#" 
              target="_blank" 
              class="mx-1"
            >
              <v-icon color="white">
                mdi-twitter
              </v-icon>
            </v-btn>
            <v-btn 
              icon 
              href="#" 
              target="_blank" 
              class="mx-1"
            >
              <v-icon color="white">
                mdi-linkedin
              </v-icon>
            </v-btn>
            <v-btn 
              icon 
              href="#" 
              target="_blank" 
              class="mx-1"
            >
              <v-icon color="white">
                mdi-instagram
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isAtBottom = ref(false);

const checkScrollPosition = () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  isAtBottom.value = scrollPosition >= pageHeight - 10;
};

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScrollPosition);
});
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #1976d2;
  padding: 10px 0;
  height: 50px;
  transition: height 0.3s ease, padding 0.3s ease;
  z-index: 1000;
  overflow: hidden;
}

.footer:hover {
  height: 350px;
  padding: 30px 0;
}

.footer .copyright {
  color: white;
  font-size: 14px;
  margin-top: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-icons {
  display: none;
  justify-content: center;
  gap: 15px;
  padding-top: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.footer:hover .social-icons {
  display: flex;
  opacity: 1;
}

.footer:hover .copyright {
  opacity: 1;
}

.text-body-2 {
  margin-bottom: 4px;
  opacity: 0.8;
}

/* Garante que o fundo da página seja branco */
:global(html),
:global(body),
:global(.v-application) {
  background-color: white !important;
}
</style>
