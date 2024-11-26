<template>
  <section id="home" class="space-y-5">
    <img
      src="/IMG.jpg"
      alt="Arison Firmino"
      data-aos="fade-down"
      class="h-20 w-20 rounded-full"
    />

    <div class="space-y-2.5">
      <h2 data-aos="fade-right" class="jetbrains-mono text-xl font-semibold">
        {{ introText }}
      </h2>

      <p data-aos="fade-left" class="text-sm text-foreground">
        {{ bioText }}
      </p>
    </div>

    <div data-aos="fade-up" class="flex items-center justify-between">
      <ResumeLink />

      <ul class="flex gap-5">
        <li
          v-for="link in externalLinks"
          :key="link.name"
          class="duration-500 hover:scale-105"
        >
          <a
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2.5"
          >
            {{ link.name }}
            <SquareArrowOutUpRight size="14" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import ResumeLink from "@/components/Introduce/ResumeLink.vue";

import { SquareArrowOutUpRight } from "lucide-vue-next";

const introText =
  "Explorando o universo da programação, com o propósito de transformar ideias em soluções reais e impactantes.";

const bioText =
  "Olá! Sou Arison, apaixonado por tecnologia e iniciando minha jornada na programação. Busco oportunidades para aprender, evoluir e construir uma carreira sólida. Explore meu portfólio e conheça meus projetos!";

const externalLinks = ref([
  { name: "LinkedIn", href: "https://www.linkedin.com/in/arisonfirmino" },
  { name: "GitHub", href: "https://github.com/arisonfirmino" },
]);
</script>
