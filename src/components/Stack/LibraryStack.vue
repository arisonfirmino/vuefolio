<template>
  <div class="flex items-center justify-center">
    <ul class="grid grid-cols-3 gap-5">
      <Skill :skills="skills" />
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Skill from "@/components/Stack/Skill.vue";

const skills = ref([
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "Prisma", icon: "prisma" },
  { name: "React Hook Form", icon: "react-hook-form" },
  { name: "Axios", icon: "axios" },
  { name: "date-fns", icon: "date-fns" },
]);
</script>
