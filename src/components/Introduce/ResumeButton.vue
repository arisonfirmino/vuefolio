<template>
  <button
    :class="[
      `flex items-center gap-2.5 rounded-full bg-background px-5 py-1.5 text-white duration-500 animate-duration-1000 hover:scale-105 dark:bg-white dark:text-black`,
      animate ? 'animate-jump' : '',
    ]"
    @click="setAnimate"
  >
    Currículo
    <MoveRightIcon size="16" />
  </button>
</template>

<script setup>
import { ref } from "vue";
import { MoveRightIcon } from "lucide-vue-next";

const animate = ref(false);

const setAnimate = () => {
  animate.value = true;
  setTimeout(() => {
    animate.value = false;
  }, 1000);
};
</script>
