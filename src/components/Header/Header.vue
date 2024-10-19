<template>
  <header
    class="fixed left-0 top-0 z-10 flex w-full items-center border-b border-solid border-black border-opacity-10 bg-container p-5 dark:border-white dark:border-opacity-10 md:justify-center"
  >
    <Nav />
    <ThemeToggle />
  </header>
</template>

<script setup>
import Nav from "@/components/Header/Nav.vue";
import ThemeToggle from "@/components/Header/ThemeToggle.vue";
</script>
