<template>
  <h3 class="text-lg font-medium uppercase">Habilidades em frontend</h3>

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
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Vue.js", icon: "vuejs" },
]);
</script>
