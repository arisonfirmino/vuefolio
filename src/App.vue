<template>
  <Header />
  <div
    class="w-full max-w-3xl space-y-20 overflow-hidden px-5 pb-5 pt-40 lg:px-0 xl:overflow-visible"
  >
    <Introduce />
    <div class="hidden">
      <TimelineList />
    </div>
    <About />
    <Projects />
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
import Projects from "@/components/Projects/Projects.vue";
import Stack from "@/components/Stack/Stack.vue";
import Contact from "@/components/Contact/Contact.vue";
import Footer from "./components/Footer.vue";
</script>
