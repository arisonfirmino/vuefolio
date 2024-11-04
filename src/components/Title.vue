<template>
  <div
    class="brygada-1918 border-b border-solid border-black border-opacity-10 pb-1.5 text-xl font-medium uppercase text-black dark:border-white dark:border-opacity-10 dark:text-white"
  >
    <span data-aos="flip-up" class="flex items-center">
      <DotIcon /> {{ title }}.
    </span>
  </div>
</template>

<script setup>
import { DotIcon } from "lucide-vue-next";

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
