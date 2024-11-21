<template>
  <header
    :class="[
      `fixed left-0 top-0 z-10 flex w-full items-center justify-between border-black border-opacity-10 bg-container p-5 dark:border-white dark:border-opacity-10 md:px-10 md:py-10 lg:px-20`,
      hasScrolled ? 'border-b' : '',
    ]"
  >
    <div class="flex items-center gap-1.5 text-foreground">
      <ThemeToggle />
      <DotIcon class="hidden md:block" />
      <Location />
    </div>
    <Menu />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import ThemeToggle from "@/components/Header/ThemeToggle.vue";
import Location from "@/components/Header/Location.vue";
import Menu from "@/components/Header/Menu.vue";

import { DotIcon } from "lucide-vue-next";

const hasScrolled = ref(false);

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
