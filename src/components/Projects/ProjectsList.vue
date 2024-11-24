<template>
  <section id="projects" class="space-y-5">
    <Title title="Projetos" />

    <p data-aos="fade-right" class="text-sm text-foreground">
      Confira a lista dos
      <span class="text-black dark:text-white">{{ projectList.length }}</span>
      principais projetos que venho desenvolvendo durante a minha jornada como
      programador.
    </p>

    <SearchProjects @handleSearchUpdate="handleSearchUpdate" />

    <ul class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <li v-for="(project, index) in filteredProjectList" :key="project.title">
        <ProjectItem :project="project" :index="index" />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

import Title from "@/components/Title.vue";
import SearchProjects from "@/components/Projects/SearchProjects.vue";
import ProjectItem from "@/components/Projects/ProjectItem.vue";

import { sortProjects } from "@/helpers/sortHelpers.js";

const projectList = ref([
  {
    title: "coders-hub",
    description:
      "Rede social para devs compartilharem projetos e interagirem com uma comunidade online.",
    repo: "https://github.com/arisonfirmino/coders-hub",
    deploy: "https://coders-hub-ecru.vercel.app",
    tags: [
      "typescript",
      "nextjs",
      "prisma",
      "mongodb",
      "tailwindcss",
      "nextauth",
    ],
  },
  {
    title: "track-flow",
    description:
      "Aplicação web que oferece uma experiência de player de música integrada com a API do Spotify.",
    repo: "https://github.com/arisonfirmino/track-flow",
    deploy: "https://arisonfirmino.github.io/track-flow",
    tags: ["javascript", "react", "axios", "tailwindcss"],
  },
  {
    title: "credenly",
    description:
      "Aplicação completa dedicada à autenticação, com um sistema robusto de login e cadastro.",
    repo: "https://github.com/arisonfirmino/credenly",
    deploy: "https://credenly.vercel.app",
    tags: [
      "typescript",
      "nextjs",
      "prisma",
      "postgresql",
      "supabase",
      "tailwindcss",
      "nextauth",
    ],
  },
  {
    title: "smart-finance-calculator",
    description:
      "Calculadora inteligente que calcula despesas e receitas conforme os gastos e ganhos do usuário.",
    repo: "https://github.com/arisonfirmino/smart-finance-calculator",
    deploy: "https://smart-finance-calculator.vercel.app",
    tags: [
      "typescript",
      "nextjs",
      "prisma",
      "postgresql",
      "supabase",
      "tailwindcss",
      "nextauth",
      "shadcn",
    ],
  },
]);

const search = ref("");

const filteredProjectList = computed(() => {
  return sortProjects(projectList.value).filter((project) =>
    project.title.toLowerCase().includes(search.value.toLowerCase()),
  );
});

const handleSearchUpdate = (query) => {
  search.value = query;
};
</script>
