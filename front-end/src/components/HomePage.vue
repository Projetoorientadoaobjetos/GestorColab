<template>
  <v-app
    style="
      background-color: #f1f3f6;
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    "
  >
    <v-img
      src="https://cdn.pixabay.com/photo/2015/06/01/09/04/keyboard-793048_1280.jpg"
      cover
      class="bg-img"
      style="
        position: absolute;
        z-index: 0;
        opacity: 0.1;
        width: 100%;
        height: 100%;
      "
    />

    <!-- Conteúdo principal -->
    <v-container
      fluid
      class="d-flex flex-column align-center justify-center pa-0"
      style="
        min-height: 100vh;
        z-index: 1;
        position: relative;
        padding-bottom: 100px;
        padding-top: 80px;
      "
    >
      <!-- Header da página atual -->
      <v-container
        class="py-12 text-center"
        style="background-color: #e3f2fd; max-width: 100%"
      >
        <v-row>
          <v-col cols="12">
            <h1
              class="text-h3 font-weight-bold mb-2 mt-10"
              style="color: #1976d2"
            >
              Aprenda Tecnologia no Seu Ritmo | Helping to Growth
            </h1>
            <p class="text-subtitle-1" style="color: #0d47a1">
              Cursos intuitivos para iniciantes e entusiastas da tecnologia, com
              suporte personalizado e comunidade ativa.
            </p>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="py-10">
        <v-row>
          <v-col cols="12" md="2" class="d-flex flex-column align-center">
            <v-card
              elevation="2"
              color="#ffffff"
              class="pa-4 mb-4"
              rounded="lg"
            >
              <v-icon color="primary">mdi-lightbulb-on</v-icon>
              <p class="text-subtitle-2 mt-2 text-center">
                Público Alvo:
                <br />
                Iniciantes em tecnologia, idosos em busca de inclusão digital, e
                profissionais que querem expandir seus conhecimentos
                tecnológicos.
              </p>
            </v-card>
          </v-col>

          <v-col cols="12" md="8">
            <v-card
              elevation="3"
              class="pa-6 mb-6"
              color="#ffffff"
              rounded="lg"
            >
              <p style="font-size: 18px">
                Bem-vindo à Helping to Growth, onde tornamos a tecnologia
                acessível para todos. Oferecemos cursos estruturados com
                instruções passo a passo e uma comunidade de suporte pronta para
                ajudar.
              </p>
            </v-card>

            <v-card
              elevation="3"
              class="pa-6 mb-6"
              color="#e8f5e9"
              rounded="lg"
            >
              <h2
                class="text-h5 font-weight-medium mb-4"
                style="color: #2e7d32"
              >
                Nossos Diferenciais
              </h2>
              <ul style="font-size: 16px">
                <li class="mb-2">
                  ✅ Cursos para iniciantes e pessoas com pouca familiaridade
                  com tecnologia
                </li>
                <li class="mb-2">
                  ✅ Suporte personalizado com tutores e mentores
                </li>
                <li class="mb-2">✅ Comunidade colaborativa e ativa</li>
                <li class="mb-2">✅ Conteúdo exclusivo para membros VIP</li>
                <li class="mb-2">
                  ✅ Abordagem prática com tutoriais passo a passo
                </li>
              </ul>
            </v-card>

            <v-card
              elevation="3"
              class="pa-6 mb-6"
              color="#fffde7"
              rounded="lg"
            >
              <h2
                class="text-h6 font-weight-medium mb-2"
                style="color: #f57f17"
              >
                Públicos
              </h2>
              <p>
                Atendemos diversos perfis como iniciantes em tecnologia, idosos
                buscando inclusão digital, funcionários enfrentando desafios com
                novas tecnologias, e entusiastas que desejam aprofundar seus
                conhecimentos práticos.
              </p>
            </v-card>
          </v-col>

          <!-- Coluna direita -->
          <v-col cols="12" md="2" class="d-flex flex-column align-center">
            <v-card
              elevation="2"
              color="#ffffff"
              class="pa-4 mb-4"
              rounded="lg"
            >
              <v-icon color="deep-purple">mdi-account-group</v-icon>
              <p class="text-subtitle-2 mt-2 text-center">
                Mais de 2.000 alunos impactados
              </p>
            </v-card>
          </v-col>
        </v-row>

        <!-- Depoimentos de Alunos -->
        <v-row>
          <v-col cols="12">
            <v-card
              elevation="3"
              class="pa-6 mb-6"
              color="#ffffff"
              rounded="lg"
            >
              <h2
                class="text-h5 font-weight-medium mb-4"
                style="color: #1976d2"
              >
                Depoimentos de Alunos
              </h2>

              <!-- Depoimento 1 -->
              <v-card elevation="2" color="#f3f7fa" class="pa-4 mb-4">
                <p style="font-size: 16px; color: #333">
                  "Depois de anos me sentindo intimidada por computadores,
                  finalmente encontrei um lugar onde posso aprender no meu
                  próprio ritmo.
                  <br />
                  Os tutores são pacientes e os conteúdos são explicados de
                  forma clara."
                  <br />
                  - <strong>Maria Silva, 67 anos</strong>
                </p>
              </v-card>

              <!-- Depoimento 2 -->
              <v-card elevation="2" color="#f3f7fa" class="pa-4 mb-4">
                <p style="font-size: 16px; color: #333">
                  "Como profissional de recursos humanos, estava tendo
                  dificuldades para acompanhar as novas tecnologias do meu
                  setor.
                  <br />
                  Os cursos da Helping to Growth me ajudaram a me atualizar e
                  ganhar mais confiança no trabalho."
                  <br />
                  - <strong>Carlos Mendes, 45 anos</strong>
                </p>
              </v-card>

              <!-- Depoimento 3 -->
              <v-card elevation="2" color="#f3f7fa" class="pa-4 mb-4">
                <p style="font-size: 16px; color: #333">
                  "Os webinars semanais são excelentes para tirar dúvidas e
                  conhecer outras pessoas que estão na mesma jornada de
                  aprendizado.
                  <br />
                  A comunidade faz toda a diferença!"
                  <br />
                  - <strong>Ana Paula Ferreira, 52 anos</strong>
                </p>
              </v-card>
            </v-card>
          </v-col>
        </v-row>

        <!-- Novo Texto "Junte-se a nós" antes dos botões -->
        <v-row align="center" justify="center">
          <v-col cols="12" md="10">
            <v-card
              class="pa-6 mt-4"
              color="#f3f7fa"
              elevation="1"
              rounded="lg"
            >
              <h2
                class="text-h6 font-weight-medium mb-3"
                style="color: #1565c0"
              >
                Junte-se a nós na jornada da inclusão digital
              </h2>
              <p style="font-size: 16px; color: #333">
                Seja você um iniciante curioso, um profissional em busca de
                atualização ou alguém que quer ajudar outros a crescer, há um
                lugar para você aqui. Nossa missão é facilitar o acesso ao
                conhecimento tecnológico de forma humana, prática e acolhedora.
              </p>
            </v-card>
          </v-col>
        </v-row>

        <!-- Novos Cards com os botões -->
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              elevation="3"
              class="pa-6 mb-6"
              color="#ffffff"
              rounded="lg"
            >
              <h2
                class="text-h6 font-weight-medium mb-4"
                style="color: #6a1b9a"
              >
                Comece Seu Aprendizado
              </h2>
              <v-btn color="primary" class="ma-2" size="large"
                >Comece Agora</v-btn
              >
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="3"
              class="pa-6 mb-6"
              color="#ffffff"
              rounded="lg"
            >
              <h2
                class="text-h6 font-weight-medium mb-4"
                style="color: #0288d1"
              >
                Conheça Nossos Planos
              </h2>
              <v-btn
                color="secondary"
                class="ma-2"
                size="large"
                variant="outlined"
                >Veja Planos</v-btn
              >
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              elevation="3"
              class="pa-6 mb-6"
              color="#ffffff"
              rounded="lg"
            >
              <h2
                class="text-h6 font-weight-medium mb-4"
                style="color: #9c27b0"
              >
                Participe de Nosso Próximo Webinar
              </h2>
              <v-btn color="deep-purple accent-4" class="ma-2" size="large"
                >Participe Agora</v-btn
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Footer -->
    <v-footer
      app
      style="position: relative; background-color: #1976d2; padding: 10px 0"
    >
      <v-row class="ma-0" align="center" justify="center">
        <v-col class="text-center">
          <p class="text-body-2" style="color: white; font-size: 14px">
            HelpingToGrowth ©2025 - Todos os direitos reservados
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
li::marker {
  color: #2e7d32;
}

.bg-img {
  pointer-events: none;
}

.v-footer {
  visibility: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.v-footer.visible {
  visibility: visible;
}
</style>
