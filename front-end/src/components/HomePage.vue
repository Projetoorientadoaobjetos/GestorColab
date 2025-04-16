<template>
  <!-- Container principal do aplicativo -->
  <v-app
    style="
      background-color: #ffff;
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    "
  >
    <!-- Imagem de fundo com opacidade reduzida -->
    <v-img
      src="https://cdn.pixabay.com/photo/2015/06/01/09/04/keyboard-793048_1280.jpg"
      cover
      class="bg-img"
      style="
        position: absolute;
        z-index: 0;
        opacity: 0.08;
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
      <!-- Banner Principal -->
      <v-container
        class="py-16 text-center"
        style="
          background-color: #dbeafe;
          max-width: 100%;
          border-bottom: 4px solid #bfdbfe;
        "
      >
        <v-row>
          <v-col cols="12">
            <h1
              class="text-h2 font-weight-bold mb-3 mt-10"
              style="color: #1e40af"
            >
              Aprenda Tecnologia no Seu Ritmo
            </h1>
            <p
              class="text-subtitle-1 mx-auto"
              style="color: #1e3a8a; max-width: 800px"
            >
              Cursos intuitivos para iniciantes e entusiastas da tecnologia, com
              suporte personalizado e comunidade ativa.
            </p>
            <v-btn
              color="#1a56db"
              size="x-large"
              class="mt-6 text-white font-weight-bold"
              rounded="pill"
              elevation="2"
              min-width="200"
            >
              Comece sua jornada
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <!-- Seção Sobre Nós -->
      <v-row>
        <v-col cols="12">
          <v-card
            elevation="3"
            class="pa-8 mb-6"
            color="#f0f9ff"
            rounded="lg"
            style="border-top: 4px solid #7dd3fc"
          >
            <h2
              class="text-h4 font-weight-bold mb-6 text-center"
              style="color: #0369a1"
            >
              Sobre Nós
            </h2>

            <!-- Cards de História e Missão -->
            <v-row>
              <v-col 
                cols="12" 
                md="6"
              >
                <v-card
                  class="pa-4 mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <h3
                    class="text-h6 font-weight-bold mb-3 text-center"
                    style="color: #1e40af"
                  >
                    Nossa História
                  </h3>
                  <p 
                    class="mb-4 text-left" 
                    style="line-height: 1.8"
                  >
                    A Helping to Growth nasceu em 2023 a partir de uma
                    observação simples: muitas pessoas estavam sendo deixadas
                    para trás na revolução digital. Fundada por um grupo de
                    educadores e especialistas em tecnologia, nossa missão
                    surgiu da paixão por tornar o conhecimento tecnológico
                    acessível a todos, independentemente da idade ou experiência
                    prévia.
                  </p>
                  <p 
                    class="text-left" 
                    style="line-height: 1.8"
                  >
                    Tudo começou com pequenos workshops gratuitos em centros
                    comunitários, onde percebemos o impacto transformador que o
                    aprendizado tecnológico tinha na vida das pessoas. O brilho
                    nos olhos de um senhor de 70 anos ao fazer sua primeira
                    videochamada com netos distantes ou a confiança renovada de
                    uma profissional ao dominar ferramentas digitais para seu
                    trabalho nos mostrou que estávamos no caminho certo.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                md="6"
              >
                <v-card
                  class="pa-4 mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <h3
                    class="text-h6 font-weight-bold mb-3 text-center"
                    style="color: #1e40af"
                  >
                    Nossa Missão
                  </h3>
                  <p 
                    class="mb-3 text-left" 
                    style="line-height: 1.8"
                  >
                    Acreditamos que a tecnologia deve unir, não dividir. Nossa
                    missão é democratizar o acesso ao conhecimento digital,
                    criando pontes em vez de barreiras.
                  </p>
                  <p 
                    class="text-left" 
                    style="line-height: 1.8"
                  >
                    Trabalhamos para:
                  </p>
                  <ul
                    class="text-left"
                    style="line-height: 1.8; list-style-position: inside"
                  >
                    <li class="mb-2">
                      Desmistificar a tecnologia através de linguagem clara e
                      acessível
                    </li>
                    <li class="mb-2">
                      Capacitar pessoas para a autonomia digital em qualquer
                      fase da vida
                    </li>
                    <li class="mb-2">
                      Construir uma comunidade inclusiva onde todos possam
                      aprender e compartilhar
                    </li>
                    <li>
                      Promover a cidadania digital e o uso consciente das
                      tecnologias
                    </li>
                  </ul>
                </v-card>
              </v-col>
            </v-row>

            <!-- Seção Nossa Equipe -->
            <h3
              class="text-h6 font-weight-bold mt-6 mb-4"
              style="color: #0ea5e9"
            >
              Nossa Equipe
            </h3>
            <p 
              class="mb-4" 
              style="line-height: 1.6"
            >
              Por trás da Helping to Growth está uma equipe diversificada de
              educadores, desenvolvedores, designers instrucionais e
              especialistas em acessibilidade, todos unidos pelo compromisso com
              a inclusão digital.
            </p>

            <!-- Cards de Membros da Equipe -->
            <v-row>
              <v-col 
                cols="12" 
                sm="6" 
                md="3"
              >
                <v-card
                  class="pa-4 mb-3"
                  outlined
                  color="#ffffff"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">M</span>
                  </v-avatar>
                  <p 
                    class="font-weight-bold mb-1"
                  >
                    Maria Oliveira
                  </p>
                  <p 
                    class="text-caption mb-2" 
                    style="color: #666"
                  >
                    Fundadora e Diretora Pedagógica
                  </p>
                  <p class="text-body-2">
                    Com mais de 15 anos de experiência em educação de adultos,
                    Maria lidera nossa metodologia de ensino focada na
                    experiência do aluno.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="3"
              >
                <v-card
                  class="pa-4 mb-3"
                  outlined
                  color="#ffffff"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">C</span>
                  </v-avatar>
                  <p 
                    class="font-weight-bold mb-1"
                  >
                    Carlos Santos
                  </p>
                  <p 
                    class="text-caption mb-2" 
                    style="color: #666"
                  >
                    Diretor de Tecnologia
                  </p>
                  <p class="text-body-2">
                    Especialista em desenvolvimento de plataformas educacionais
                    acessíveis, Carlos garante que nossa tecnologia sirva à
                    pedagogia, e não o contrário.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="3"
              >
                <v-card
                  class="pa-4 mb-3"
                  outlined
                  color="#ffffff"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">A</span>
                  </v-avatar>
                  <p 
                    class="font-weight-bold mb-1"
                  >
                    Ana Soares
                  </p>
                  <p 
                    class="text-caption mb-2" 
                    style="color: #666"
                  >
                    Coordenadora de Comunidade
                  </p>
                  <p class="text-body-2">
                    Responsável por fomentar as interações entre alunos,
                    mentores e tutores, criando um ambiente colaborativo onde
                    todos se sintam bem-vindos.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="3"
              >
                <v-card
                  class="pa-4 mb-3"
                  outlined
                  color="#ffffff"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">P</span>
                  </v-avatar>
                  <p 
                    class="font-weight-bold mb-1"
                  >
                    Pedro Lima
                  </p>
                  <p 
                    class="text-caption mb-2" 
                    style="color: #666"
                  >
                    Especialista em Acessibilidade
                  </p>
                  <p class="text-body-2">
                    Trabalha para garantir que nossa plataforma e conteúdos
                    sejam acessíveis para pessoas com diferentes necessidades.
                  </p>
                </v-card>
              </v-col>
            </v-row>

            <!-- Seção Nossos Valores -->
            <h3
              class="text-h6 font-weight-bold mt-6 mb-3"
              style="color: #0ea5e9"
            >
              Nossos Valores
            </h3>
            <v-row>
              <v-col 
                cols="12" 
                sm="6" 
                md="2.4"
              >
                <v-card
                  class="pa-4 text-center"
                  outlined
                  height="100%"
                  color="#ffffff"
                  elevation="2"
                >
                  <v-icon 
                    color="#0ea5e9" 
                    class="mb-2"
                  >
                    mdi-heart
                  </v-icon>
                  <p 
                    class="font-weight-bold"
                  >
                    Empatia
                  </p>
                  <p class="text-body-2">
                    Compreendemos as dificuldades e receios de quem está
                    iniciando no mundo digital.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="2.4"
              >
                <v-card
                  class="pa-4 text-center"
                  outlined
                  height="100%"
                  color="#ffffff"
                  elevation="2"
                >
                  <v-icon 
                    color="#0ea5e9" 
                    class="mb-2"
                  >
                    mdi-timer-sand
                  </v-icon>
                  <p 
                    class="font-weight-bold"
                  >
                    Paciência
                  </p>
                  <p class="text-body-2">
                    Respeitamos o ritmo individual de aprendizado de cada
                    pessoa.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="2.4"
              >
                <v-card
                  class="pa-4 text-center"
                  outlined
                  height="100%"
                  color="#ffffff"
                  elevation="2"
                >
                  <v-icon 
                    color="#0ea5e9" 
                    class="mb-2"
                  >
                    mdi-lightbulb-on
                  </v-icon>
                  <p 
                    class="font-weight-bold"
                  >
                    Clareza
                  </p>
                  <p class="text-body-2">
                    Comunicamos conceitos complexos de forma simples e direta.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="2.4"
              >
                <v-card
                  class="pa-4 text-center"
                  outlined
                  height="100%"
                  color="#ffffff"
                  elevation="2"
                >
                  <v-icon 
                    color="#0ea5e9" 
                    class="mb-2"
                  >
                    mdi-certificate
                  </v-icon>
                  <p 
                    class="font-weight-bold"
                  >
                    Qualidade
                  </p>
                  <p class="text-body-2">
                    Desenvolvemos conteúdos de excelência com foco na aplicação
                    prática.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="2.4"
              >
                <v-card
                  class="pa-4 text-center"
                  outlined
                  height="100%"
                  color="#ffffff"
                  elevation="2"
                >
                  <v-icon 
                    color="#0ea5e9" 
                    class="mb-2"
                  >
                    mdi-account-group
                  </v-icon>
                  <p 
                    class="font-weight-bold"
                  >
                    Comunidade
                  </p>
                  <p class="text-body-2">
                    Acreditamos no poder da aprendizagem colaborativa e do
                    suporte mútuo.
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Seção Nossos Cursos -->
      <v-row>
        <v-col cols="12">
          <v-card 
            elevation="3" 
            class="pa-8 mb-6" 
            color="#ffffff" 
            rounded="lg"
          >
            <h2
              class="text-h4 font-weight-bold mb-6 text-center"
              style="color: #1e40af"
            >
              Nossos Cursos
            </h2>
            <p
              class="text-center mb-8 mx-auto"
              style="max-width: 800px; line-height: 1.6"
            >
              Oferecemos uma variedade de cursos estruturados para atender
              diferentes níveis de conhecimento e necessidades específicas:
            </p>

            <!-- Cards de Cursos -->
            <v-row>
              <v-col 
                cols="12" 
                md="4"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <h3
                    class="text-h6 font-weight-bold mb-3"
                    style="color: #1e40af"
                  >
                    Fundamentos de Tecnologia
                  </h3>
                  <p style="line-height: 1.6">
                    Ideal para quem está dando os primeiros passos no mundo
                    digital. Aprenda conceitos básicos de computadores, internet
                    e segurança online.
                  </p>
                  <v-btn
                    color="#3b82f6"
                    text
                    class="mt-4 pl-0"
                    prepend-icon="mdi-arrow-right"
                  >
                    Saiba mais
                  </v-btn>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                md="4"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <h3
                    class="text-h6 font-weight-bold mb-3"
                    style="color: #1e40af"
                  >
                    Aplicativos Essenciais
                  </h3>
                  <p style="line-height: 1.6">
                    Domine as ferramentas mais utilizadas no dia a dia, como
                    navegadores, email, processadores de texto e planilhas.
                  </p>
                  <v-btn
                    color="#3b82f6"
                    text
                    class="mt-4 pl-0"
                    prepend-icon="mdi-arrow-right"
                  >
                    Saiba mais
                  </v-btn>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                md="4"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <h3
                    class="text-h6 font-weight-bold mb-3"
                    style="color: #1e40af"
                  >
                    Segurança Digital
                  </h3>
                  <p style="line-height: 1.6">
                    Proteja-se online com conhecimentos práticos sobre senhas
                    fortes, reconhecimento de golpes, navegação segura e
                    proteção de dados pessoais.
                  </p>
                  <v-btn
                    color="#3b82f6"
                    text
                    class="mt-4 pl-0"
                    prepend-icon="mdi-arrow-right"
                  >
                    Saiba mais
                  </v-btn>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                md="6"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <h3
                    class="text-h6 font-weight-bold mb-3"
                    style="color: #1e40af"
                  >
                    Tecnologia para o Dia a Dia
                  </h3>
                  <p style="line-height: 1.6">
                    Aprenda a usar smartphones e tablets, aplicativos úteis,
                    redes sociais e serviços de streaming com confiança.
                  </p>
                  <v-btn
                    color="#3b82f6"
                    text
                    class="mt-4 pl-0"
                    prepend-icon="mdi-arrow-right"
                  >
                    Saiba mais
                  </v-btn>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                md="6"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <h3
                    class="text-h6 font-weight-bold mb-3"
                    style="color: #1e40af"
                  >
                    Tecnologia para Profissionais
                  </h3>
                  <p style="line-height: 1.6">
                    Atualize suas habilidades tecnológicas para o mercado de
                    trabalho moderno com cursos focados em produtividade e
                    colaboração digital.
                  </p>
                  <v-btn
                    color="#3b82f6"
                    text
                    class="mt-4 pl-0"
                    prepend-icon="mdi-arrow-right"
                  >
                    Saiba mais
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Seção Como Funciona -->
      <v-row>
        <v-col cols="12">
          <v-card
            elevation="3"
            class="pa-8 mb-6"
            color="#f0f9ff"
            rounded="lg"
            style="border-top: 4px solid #7dd3fc"
          >
            <h2
              class="text-h4 font-weight-bold mb-6 text-center"
              style="color: #0369a1"
            >
              Como Funciona
            </h2>

            <!-- Cards de Processo -->
            <v-row justify="center">
              <v-col 
                cols="12" 
                sm="6" 
                md="4" 
                lg="2"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">1</span>
                  </v-avatar>
                  <h3 class="text-subtitle-1 font-weight-bold mb-2">
                    Cadastre-se
                  </h3>
                  <p class="text-body-2">
                    Crie sua conta gratuita e explore nossa plataforma.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="4" 
                lg="2"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">2</span>
                  </v-avatar>
                  <h3 class="text-subtitle-1 font-weight-bold mb-2">
                    Escolha seu curso
                  </h3>
                  <p class="text-body-2">
                    Selecione o curso que melhor atende às suas necessidades
                    atuais.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="4" 
                lg="2"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">3</span>
                  </v-avatar>
                  <h3 class="text-subtitle-1 font-weight-bold mb-2">
                    Aprenda no seu ritmo
                  </h3>
                  <p class="text-body-2">
                    Acesse as aulas quando e onde quiser, pausando e revisando
                    conforme necessário.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="4" 
                lg="2"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">4</span>
                  </v-avatar>
                  <h3 class="text-subtitle-1 font-weight-bold mb-2">
                    Pratique com exercícios
                  </h3>
                  <p class="text-body-2">
                    Consolide seu aprendizado com atividades práticas e
                    interativas.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="4" 
                lg="2"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">5</span>
                  </v-avatar>
                  <h3 class="text-subtitle-1 font-weight-bold mb-2">
                    Conecte-se à comunidade
                  </h3>
                  <p class="text-body-2">
                    Tire dúvidas, compartilhe experiências e faça parte de uma
                    rede de apoio.
                  </p>
                </v-card>
              </v-col>

              <v-col 
                cols="12" 
                sm="6" 
                md="4" 
                lg="2"
              >
                <v-card
                  class="pa-4 text-center mb-4"
                  color="#ffffff"
                  height="100%"
                  elevation="2"
                >
                  <v-avatar 
                    color="#0ea5e9" 
                    size="54" 
                    class="mb-4"
                  >
                    <span class="text-h5 text-white font-weight-bold">6</span>
                  </v-avatar>
                  <h3 class="text-subtitle-1 font-weight-bold mb-2">
                    Receba certificado
                  </h3>
                  <p class="text-body-2">
                    Ao concluir o curso, receba seu certificado digital para
                    comprovar suas novas habilidades.
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Seção Depoimentos -->
      <v-row>
        <v-col cols="12">
          <v-card 
            elevation="3" 
            class="pa-8 mb-6" 
            color="#ffffff" 
            rounded="lg"
          >
            <h2
              class="text-h4 font-weight-bold mb-6 text-center"
              style="color: #1e40af"
            >
              Depoimentos de Alunos
            </h2>

            <v-row>
              <v-col 
                cols="12" 
                md="4"
              >
                <!-- Depoimento 1 -->
                <v-card
                  elevation="2"
                  color="#f8fafc"
                  class="pa-6 mb-4 rounded-lg"
                  style="border-left: 4px solid #3b82f6; height: 100%"
                >
                  <v-icon 
                    color="#3b82f6" 
                    class="mb-3"
                  >
                    mdi-format-quote-open
                  </v-icon>
                  <p
                    style="font-size: 16px; color: #334155; line-height: 1.6"
                    class="mb-4"
                  >
                    "Depois de anos me sentindo intimidada por computadores,
                    finalmente encontrei um lugar onde posso aprender no meu
                    próprio ritmo. Os tutores são pacientes e os conteúdos são
                    explicados de forma clara."
                  </p>
                  <div class="d-flex align-center mt-4">
                    <v-avatar 
                      color="#bfdbfe" 
                      size="42"
                    >
                      <span
                        class="text-subtitle-2 text-blue-800 font-weight-bold"
                      >
                        MS
                      </span>
                    </v-avatar>
                    <div class="ml-3">
                      <p class="text-subtitle-2 font-weight-bold mb-0">
                        Maria Silva
                      </p>
                      <p 
                        class="text-caption" 
                        style="color: #64748b"
                      >
                        67 anos
                      </p>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-card 
      elevation="3" 
      class="pa-6" 
      color="#ffffff" 
      rounded="lg"
    >
      <h2 
        class="text-h5 font-weight-medium mb-4" 
        style="color: #1976d2"
      >
        Próximos Eventos
      </h2>
      <v-row>
        <v-col 
          cols="12" 
          md="6"
        >
          <v-card 
            elevation="2" 
            class="pa-4"
          >
            <v-card-title>Webinar: Introdução à Programação</v-card-title>
            <v-card-subtitle>10 de Outubro, 2024 - 19h</v-card-subtitle>
            <v-card-text>
              Aprenda os conceitos básicos de programação em uma sessão
              interativa.
            </v-card-text>
            <v-btn 
              color="primary" 
              class="hover-effect"
            >
              Inscreva-se
            </v-btn>
          </v-card>
        </v-col>
        <v-col 
          cols="12" 
          md="6"
        >
          <v-card 
            elevation="2" 
            class="pa-4"
          >
            <v-card-title>
              Workshop: Ferramentas Digitais para o Trabalho
            </v-card-title>
            <v-card-subtitle>15 de Outubro, 2024 - 14h</v-card-subtitle>
            <v-card-text>
              Descubra ferramentas que podem facilitar seu dia a dia profissional.
            </v-card-text>
            <v-btn 
              color="primary" 
              class="hover-effect"
            >
              Inscreva-se
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card 
      elevation="3" 
      class="pa-6" 
      color="#ffffff" 
      rounded="lg"
    >
      <h2 
        class="text-h5 font-weight-medium mb-4" 
        style="color: #1976d2"
      >
        Cursos em Destaque
      </h2>
      <v-row>
        <v-col 
          cols="12" 
          md="4"
        >
          <v-card
            elevation="2"
            class="pa-4"
            style="position: relative; height: 300px"
          >
            <v-img
              src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height="100%"
              width="100%"
              style="position: absolute; top: 0; left: 0; z-index: 0"
              cover
            />
            <div
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 1;
              "
            />
            <div
              style="position: relative; z-index: 2; color: white; padding: 16px"
            >
              <v-card-title 
                class="white--text"
              >
                Introdução à Informática
              </v-card-title>
              <v-card-text class="white--text">
                Aprenda os fundamentos da informática de forma simples e prática.
              </v-card-text>
              <v-btn 
                color="primary" 
                class="hover-effect"
              >
                Saiba Mais
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col 
          cols="12" 
          md="4"
        >
          <v-card
            elevation="2"
            class="pa-4"
            style="position: relative; height: 300px"
          >
            <v-img
              src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height="100%"
              width="100%"
              style="position: absolute; top: 0; left: 0; z-index: 0"
              cover
            />
            <div
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 1;
              "
            />
            <div
              style="position: relative; z-index: 2; color: white; padding: 16px"
            >
              <v-card-title 
                class="white--text"
              >
                Redes Sociais para Iniciantes
              </v-card-title>
              <v-card-text class="white--text">
                Descubra como usar as redes sociais de forma segura e eficaz.
              </v-card-text>
              <v-btn 
                color="primary" 
                class="hover-effect"
              >
                Saiba Mais
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col 
          cols="12" 
          md="4"
        >
          <v-card
            elevation="2"
            class="pa-4"
            style="position: relative; height: 300px"
          >
            <v-img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              height="100%"
              width="100%"
              style="position: absolute; top: 0; left: 0; z-index: 0"
              cover
            />
            <div
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 1;"
            />
            <div
              style="position: relative; z-index: 2; color: white; padding: 16px"
            >
              <v-card-title 
                class="white--text"
              >
                Office 365 para o Dia a Dia
              </v-card-title>
              <v-card-text class="white--text">
                Domine as ferramentas do Office 365 para aumentar sua
                produtividade.
              </v-card-text>
              <v-btn 
                color="primary" 
                class="hover-effect"
              >
                Saiba Mais
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <div>
      <v-card 
        elevation="3" 
        class="pa-6" 
        color="#ffffff" 
        rounded="lg"
      >
        <h2 
          class="text-h5 
          font-weight-medium mb-4" 
          style="color: #1976d2"
        >
          Entre em Contato
        </h2>
        <v-form>
          <v-text-field 
            label="Nome" 
            outlined 
            required 
            class="mb-4"
          />
          <v-text-field
            label="Email"
            outlined
            required
            type="email"
            class="mb-4"
          />
          <v-textarea 
            label="Mensagem" 
            outlined 
            rows="4" 
            class="mb-4"
          />
          <v-btn 
            color="primary" 
            class="hover-effect"
          >
            Enviar
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>
  <script setup lang="ts">
  </script>
  <style scoped></style>