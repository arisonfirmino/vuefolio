<template>
  <header
    :class="[
      `fixed left-0 top-0 z-10 flex w-full items-center border-solid border-black border-opacity-10 bg-container p-5 dark:border-white dark:border-opacity-10 md:justify-center`,
      hasScrolled ? 'border-b' : '',
    ]"
  >
    <Nav />
    <ThemeToggle />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Nav from "@/components/Header/Nav.vue";
import ThemeToggle from "@/components/Header/ThemeToggle.vue";

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
