<template>
  <button
    @click="handleClick"
    :class="[
      `absolute right-5 flex h-10 w-10 items-center justify-center rounded-lg bg-background text-white animate-duration-1000`,
      animate ? 'animate-jump' : '',
    ]"
  >
    <component :is="isDark ? MoonIcon : SunIcon" color="white" size="20" />
  </button>
</template>

<script setup>
import { ref } from "vue";
import { SunIcon, MoonIcon } from "lucide-vue-next";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const animate = ref(false);

const setAnimate = () => {
  animate.value = true;
  setTimeout(() => {
    animate.value = false;
  }, 1000);
};

const handleClick = () => {
  toggleDark();
  setAnimate();
};
</script>
