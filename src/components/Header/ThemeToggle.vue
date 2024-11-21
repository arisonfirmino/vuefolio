<template>
  <button @click="toggleDark()" class="text-black dark:text-white">
    <component
      :is="isDark ? MoonIcon : SunIcon"
      color="currentColor"
      size="14"
    />
  </button>
</template>

<script setup>
import { watch } from "vue";

import { useDark, useToggle } from "@vueuse/core";

import { SunIcon, MoonIcon } from "lucide-vue-next";

const isDark = useDark();
const toggleDark = useToggle(isDark);

watch(isDark, (newValue) => {
  document.body.classList.toggle("dark", newValue);
});
</script>
