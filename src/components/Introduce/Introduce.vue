<template>
  <section id="home" class="space-y-5">
    <img src="/IMG.jpg" alt="Arison Firmino" class="h-20 w-20 rounded-full" />
    <h2 class="brygada-1918 text-2xl font-medium">
      Embarcando em uma jornada de aprendizado na programação, buscando
      transformar ideias em soluções práticas.
    </h2>
    <p class="text-base text-foreground">
      Me chamo Arison, estou começando na programação e buscando oportunidades
      para aprender e crescer. Explore meu portfólio para conhecer meus projetos
      e habilidades.
    </p>
    <div class="flex items-center justify-between">
      <ResumeButton />

      <ul class="flex gap-5">
        <li
          v-for="item in links"
          :key="item.name"
          class="duration-500 hover:scale-105"
        >
          <a
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-1.5"
          >
            {{ item.name }}
            <MoveUpRightIcon size="14" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ResumeButton from "@/components/Introduce/ResumeButton.vue";
import { MoveUpRightIcon } from "lucide-vue-next";

const links = ref([
  { name: "GitHub", href: "https://github.com/arisonfirmino" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/arisonfirmino" },
]);
</script>
