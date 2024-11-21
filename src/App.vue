<template>
  <Header />

  <div
    class="w-full max-w-3xl space-y-20 overflow-x-hidden px-5 pt-40 lg:overflow-x-visible lg:px-0"
  >
    <Introduce />
    <div class="hidden">
      <TimelineList />
    </div>
    <About />
    <ProjectsList />
    <Stack />
    <Contact />
  </div>

  <Footer />
</template>

<script setup>
import Header from "@/components/Header/Header.vue";
import Introduce from "@/components/Introduce/Introduce.vue";
import TimelineList from "@/components/Timeline/TimelineList.vue";
import About from "@/components/About/About.vue";
import ProjectsList from "@/components/Projects/ProjectsList.vue";
import Stack from "@/components/Stack/Stack.vue";
import Contact from "@/components/Contact/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>
