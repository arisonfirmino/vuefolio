<template>
  <div class="w-full space-y-5">
    <h2 class="flex items-center gap-2.5 text-lg font-semibold uppercase">
      <Icon name="graduation" />
      Educação
    </h2>

    <Timeline :items="education_items" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Icon from "@/components/Icon.vue";
import Timeline from "@/components/Timeline/Timeline.vue";

const education_items = ref([
  {
    title: "Bach. em Ciência da Computação",
    location: "UNIMAR - Universidade de Marília",
    date: "jan. 2025 - Presente",
  },
]);
</script>
