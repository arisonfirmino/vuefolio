<template>
  <section id="projects" class="space-y-5">
    <Title title="Projetos" />

    <p class="text-sm text-foreground">
      Confira a lista dos
      <span class="text-black dark:text-white">{{ projects.length }}</span>
      principais projetos que venho desenvolvendo durante a minha jornada como
      programador.
    </p>

    <Search @update-search="updateSearch" />

    <ul class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <li
        v-for="project in filteredProjects"
        :key="project.title"
        class="group relative rounded-lg border border-solid border-black border-opacity-10 duration-500 hover:scale-105 hover:border-opacity-100 hover:bg-white dark:border-white dark:border-opacity-10 dark:hover:border-opacity-100 dark:hover:bg-black"
      >
        <a :href="project.repo" target="_blank" rel="noreferrer">
          <div class="px-5 pt-5">
            <h3 class="text-lg font-bold">{{ project.title }}</h3>
          </div>
          <div class="px-5 pt-1">
            <p class="text-sm text-foreground">{{ project.description }}</p>
          </div>
          <div
            class="flex gap-2.5 overflow-x-scroll px-5 py-2 [&::-webkit-scrollbar]:hidden"
          >
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-full bg-gray-200 px-2.5 py-0.5 text-xs lowercase text-foreground dark:bg-background dark:text-white"
              >{{ tag }}</span
            >
          </div>
          <div class="px-5 pb-5">
            <a
              :href="project.deploy"
              target="_blank"
              rel="noreferrer"
              class="flex items-center justify-between rounded-full bg-background px-5 py-2.5 text-white duration-500 hover:bg-black dark:bg-white dark:text-black dark:hover:bg-background dark:hover:text-white"
              >Ver projeto
              <MoveRightIcon size="16" />
            </a>
          </div>
        </a>

        <span
          class="absolute right-2.5 top-3.5 opacity-10 duration-500 group-hover:opacity-100"
        >
          <Icon name="bookmark" />
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup>
import Title from "../Title.vue";
import { ref, computed } from "vue";
import { MoveRightIcon } from "lucide-vue-next";
import Icon from "@/components/Icon.vue";
import Search from "./Search.vue";

const projects = ref([
  {
    title: "text.fy",
    description:
      "Uma rede social onde você compartilha ideias e interage com uma comunidade online.",
    repo: "https://github.com/arisonfirmino/text.fy",
    deploy: "https://text-fy.vercel.app",
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
    title: "sendify",
    description:
      "Aplicação web que permite enviar e receber e-mails via interface web.",
    repo: "https://github.com/arisonfirmino/sendify",
    deploy: "https://sendify-six.vercel.app",
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
    title: "financial-control",
    description:
      "Uma aplicação web interativa projetada para otimizar a gestão das finanças pessoais.",
    repo: "https://github.com/arisonfirmino/financial-control",
    deploy: "https://financial-control-omega.vercel.app",
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
    title: "task-hub",
    description:
      "Aplicação de gerenciamento de tarefas com interação de arrastar e soltar (drag and drop).",
    repo: "https://github.com/arisonfirmino/task-hub",
    deploy: "https://task-hub-lyart-phi.vercel.app",
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
    title: "the-burger-lab",
    description:
      "Simula um cardápio digital de uma hamburgueria, permitindo pedidos diretos via aplicativo.",
    repo: "https://github.com/arisonfirmino/the-burger-lab",
    deploy: "https://the-burger-lab.vercel.app",
    tags: [
      "typescript",
      "nextjs",
      "prisma",
      "mongodb",
      "tailwindcss",
      "nextauth",
    ],
  },
]);

const search = ref("");

const filteredProjects = computed(() => {
  return projects.value.filter((project) =>
    project.title.toLowerCase().includes(search.value.toLowerCase()),
  );
});

const updateSearch = (query) => {
  search.value = query;
};
</script>
