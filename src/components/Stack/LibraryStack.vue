<template>
  <div class="flex items-center justify-center">
    <ul class="grid grid-cols-3 gap-5">
      <li
        v-for="skill in skills"
        :key="skill.name"
        class="group relative flex h-[90px] w-[90px] cursor-default flex-col items-center justify-center rounded-xl border border-solid border-black border-opacity-10 duration-500 hover:border-opacity-100 dark:border-white dark:border-opacity-10 dark:hover:border-opacity-100"
      >
        <span class="duration-500 group-hover:mb-6">
          <Icon :name="skill.icon" />
        </span>
        <span
          class="invisible absolute w-full truncate px-2.5 text-center text-xs group-hover:visible group-hover:mt-6 group-hover:duration-500"
          >{{ skill.name }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Icon from "../Icon.vue";

const skills = ref([
  { name: "TailwindCSS", icon: "tailwindcss" },
  { name: "Prisma", icon: "prisma" },
  { name: "React Hook Form", icon: "react-hook-form" },
  { name: "Axios", icon: "axios" },
  { name: "date-fns", icon: "date-fns" },
]);
</script>
