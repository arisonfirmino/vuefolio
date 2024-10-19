<template>
  <section id="about" class="space-y-5">
    <Title title="Sobre mim" />

    <div class="space-y-5 text-foreground">
      <p>
        Meu nome é <i>Arison Firmino</i>, tenho <i>23 anos</i> e sou um futuro
        desenvolvedor. Meu primeiro contato com a programação foi em 2023 e,
        desde então, venho me dedicando aos estudos de forma autodidata. Ao
        longo desse período, me aprofundei no desenvolvimento fullstack,
        adquirindo habilidades tanto no frontend, com <i>HTML</i>, <i>CSS</i>,
        <i>JavaScript</i> e <i>TypeScript</i>, quanto no backend, utilizando
        <i>Node.js</i> e bancos de dados relacionais, como <i>PostgreSQL</i>, e
        não relacionais, como <i>MongoDB</i>.
      </p>
      <p>
        Também me concentrei em frameworks como <i>ReactJS</i> e <i>Next.js</i>,
        que tenho utilizado no desenvolvimento dos meus projetos devido à sua
        facilidade de uso e versatilidade. Esses frameworks tem sido fundamental
        para o meu aprendizado e crescimento na área.
      </p>
      <p>
        Atualmente, estou em busca da minha primeira oportunidade na área de
        programação, onde possa aprender, crescer e dar início à minha carreira
        profissional.
      </p>
    </div>

    <div class="text-center">
      <button
        v-if="!seeMore"
        @click="setSeeMore"
        class="duration-500 hover:scale-105"
      >
        ver mais
      </button>
    </div>

    <div v-if="seeMore" class="space-y-5 text-foreground">
      <p>
        Sempre me interessei por tecnologia e tudo que a envolve, mas foi
        recentemente que percebi que é nessa área que quero construir minha
        carreira profissional. A programação me mostrou que posso transformar
        ideias em soluções reais. Esse poder de inovação e a constante evolução
        tecnológica me motivam a continuar aprendendo e desenvolvendo minhas
        habilidades, sempre buscando novos desafios.
      </p>
      <p>
        Por agora, meus principais objetivos têm sido iniciar uma graduação na
        área de programação e conquistar uma oportunidade de trabalho no mesmo
        campo. Tenho buscado constantemente aprimorar minhas habilidades
        técnicas e, ao longo desse processo, percebi que vários aspectos da
        programação, como a capacidade de resolver problemas e a adaptabilidade,
        também têm contribuído para o meu desenvolvimento pessoal.
      </p>
      <p>
        Meus conhecimentos e habilidades hoje são fruto dos projetos pessoais
        que desenvolvi desde que comecei a estudar programação. Esse processo me
        permitiu aprender muito em um curto período de tempo, e continuo a
        evoluir constantemente. Estou satisfeito com o progresso que alcancei
        até aqui, mas sigo sempre em busca de novos desafios que me permitam
        expandir ainda mais meus conhecimentos e habilidades.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Title from "@/components/Title.vue";

const seeMore = ref(false);

const setSeeMore = () => {
  seeMore.value = true;
};
</script>
