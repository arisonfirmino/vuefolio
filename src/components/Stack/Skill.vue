<template>
  <li
    v-for="(skill, index) in skills"
    :key="skill.name"
    data-aos="zoom-in"
    :data-aos-delay="index * 100"
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
</template>

<script setup>
import Icon from "@/components/Icon.vue";

defineProps({
  skills: {
    type: Object,
    required: true,
  },
});
</script>
