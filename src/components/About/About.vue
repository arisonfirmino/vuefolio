<template>
  <section id="about" class="space-y-5">
    <Title title="Sobre mim" />

    <div data-aos="fade-up" class="space-y-5 text-foreground">
      <p>
        Meu nome é <i>Arison Firmino</i>, tenho <i>23 anos</i> e sou apaixonado
        por tecnologia. Minha jornada na programação começou como uma simples
        curiosidade, que rapidamente se transformou em algo maior: um propósito.
      </p>
      <p>
        Iniciei essa jornada em 2023, com estudos autodidatas, aprendendo o
        básico de <i>HTML</i>, <i>CSS</i> e <i>JavaScript</i>. Com o passar do
        tempo e o avanço dos estudos, fui me conectando cada vez mais com o
        mundo do desenvolvimento web. Cada linha de código que escrevia não era
        apenas aprendizado, mas um passo em direção ao meu objetivo de criar
        soluções que realmente façam a diferença.
      </p>
      <p>
        À medida que evoluía, naturalmente comecei a explorar frameworks como o
        <i>ReactJS</i>, que abriram ainda mais possibilidades para transformar
        ideias em realidade. Hoje, minha base de aprendizado está focada no
        desenvolvimento web <i>full stack</i>, e meus projetos são desenvolvidos
        principalmente com <i>Next.js</i> e <i>TypeScript</i>. O desenvolvimento
        <i>full stack</i> me encanta por unir o backend ao frontend, permitindo
        que ambos trabalhem em harmonia. Ver tudo funcionando perfeitamente como
        um único sistema integrado traz uma sensação de realização e orgulho
        pelo trabalho realizado.
      </p>

      <p>
        Atualmente, estou iniciando minha graduação em
        <i>Ciência da Computação</i> e buscando minha primeira oportunidade para
        atuar na área de tecnologia. Quero um ambiente onde possa aprender,
        evoluir e dar início oficial à minha carreira profissional.
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

    <div v-if="seeMore" data-aos="fade-up" class="space-y-5 text-foreground">
      <p>
        Esse mundo surgiu para mim de forma inesperada, mas se tornou uma
        paixão. Descobri que a tecnologia é uma ferramenta poderosa para
        transformar ideias em realidade, esse poder de inovação e a constante
        evolução tecnológica me motivam a continuar aprendendo e desenvolvendo
        minhas habilidades, sempre buscando novos desafios.
      </p>
      <p>
        Meu objetivo é evoluir constantemente como desenvolvedor, expandindo
        minhas habilidades e conhecimentos para alcançar novos patamares na área
        de tecnologia. No futuro, quero trabalhar em projetos que impactem
        positivamente as pessoas, e quem sabe, liderar algo que inspire outros
        desenvolvedores.
      </p>
      <p>
        Acredito que aprendizado e evolução são contínuos, e estou animado com
        as possibilidades que o futuro reserva.
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
