<template>
  <div class="w-full">
    <h3 class="mb-5 flex items-center gap-2.5 text-lg font-semibold uppercase">
      <icon name="building" />
      Experiência profissional
    </h3>

    <div
      v-for="item in experience_items"
      :key="item.title"
      class="w-full border-l-2 border-solid border-black border-opacity-10 pb-10 pl-[30px] dark:border-white dark:border-opacity-10"
    >
      <div
        class="relative flex h-24 flex-col justify-between rounded duration-500 before:absolute before:-left-[36.2px] before:top-3 before:block before:h-3 before:w-3 before:rounded-full before:bg-background before:content-[''] dark:border-opacity-10 before:dark:bg-white"
      >
        <h2 class="text-lg font-semibold">
          {{ item.title }}
        </h2>
        <h3>{{ item.location }}</h3>
        <p class="text-sm text-foreground">{{ item.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Icon from "@/components/Icon.vue";

const experience_items = ref([
  {
    title: "************************************",
    location: "************************************",
    date: "**** - ****",
  },
]);
</script>
