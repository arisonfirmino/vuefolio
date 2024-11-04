<template>
  <section id="projects" class="space-y-5">
    <Title title="Projetos" />

    <p data-aos="fade-right" class="text-sm text-foreground">
      Confira a lista dos
      <span class="text-black dark:text-white">{{ projects.length }}</span>
      principais projetos que venho desenvolvendo durante a minha jornada como
      programador.
    </p>

    <Search @update-search="updateSearch" />

    <ul class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <li
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        class="group relative rounded-lg border border-solid border-black border-opacity-10 duration-500 hover:scale-105 hover:border-opacity-100 hover:bg-white dark:border-white dark:border-opacity-10 dark:hover:border-opacity-100 dark:hover:bg-black"
      >
        <a :href="project.repo" target="_blank" rel="noreferrer">
          <div class="px-5 pt-5">
            <h3 class="text-lg font-bold">{{ project.title }}</h3>
          </div>
          <div class="px-5 pt-1">
            <p class="text-sm lowercase text-foreground">
              {{ project.description }}
            </p>
          </div>
          <div
            class="flex gap-2.5 overflow-x-scroll px-5 py-2 [&::-webkit-scrollbar]:hidden"
          >
            <span
              v-for="tag in sortTags(project.tags)"
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
import Title from "@/components/Title.vue";
import { ref, computed } from "vue";
import Search from "@/components/Projects/Search.vue";
import { MoveRightIcon } from "lucide-vue-next";
import Icon from "@/components/Icon.vue";
import { sortProjects, sortTags } from "@/helpers/sortHelpers.js";

const projects = ref([
  {
    title: "chirp",
    description:
      "Rede social dedicada à publicação de textos e interação com uma comunidade online.",
    repo: "https://github.com/arisonfirmino/chirp",
    deploy: "https://chirp-drab.vercel.app",
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
]);

const search = ref("");

const filteredProjects = computed(() => {
  return sortProjects(projects.value).filter((project) =>
    project.title.toLowerCase().includes(search.value.toLowerCase()),
  );
});

const updateSearch = (query) => {
  search.value = query;
};
</script>
