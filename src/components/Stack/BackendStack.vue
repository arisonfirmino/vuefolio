<template>
  <h3 data-aos="fade-right" class="text-lg font-medium uppercase">
    Habilidades em backend e banco de dados
  </h3>

  <div class="flex items-center justify-center">
    <ul class="grid grid-cols-3 gap-5 md:grid-cols-7">
      <Skill :skills="skills" />
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Skill from "@/components/Stack/Skill.vue";

const skills = ref([
  { name: "Node.js", icon: "nodejs" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
]);
</script>
