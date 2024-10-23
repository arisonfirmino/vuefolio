<template>
  <div class="w-full space-y-5">
    <h2 class="flex items-center gap-2.5 text-lg font-semibold uppercase">
      <Icon name="building" />
      Experiência profissional
    </h2>

    <Timeline :items="experience_items" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Icon from "@/components/Icon.vue";
import Timeline from "@/components/Timeline/Timeline.vue";

const experience_items = ref([
  {
    title: "************************************",
    location: "************************************",
    date: "**** - ****",
  },
]);
</script>
