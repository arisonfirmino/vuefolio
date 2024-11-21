<template>
  <div
    :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
    class="rounded-lg border border-solid border-black border-opacity-10 hover:border-opacity-100 hover:bg-white dark:border-white dark:border-opacity-10 dark:hover:border-opacity-100 dark:hover:bg-black"
  >
    <div class="px-5 pt-5">
      <h3 class="text-lg font-bold">{{ project.title }}</h3>
    </div>

    <div class="px-5 pt-1">
      <p class="text-sm lowercase text-foreground">
        {{ project.description }}
      </p>
    </div>

    <Tags :tags="project.tags" />

    <div class="flex gap-5 px-5 pb-5 pt-2.5">
      <a
        :href="project.deploy"
        target="_blank"
        rel="noreferrer"
        class="jetbrains-mono flex w-full items-center justify-between rounded-lg bg-background px-3 py-2.5 text-xs uppercase text-white active:bg-black dark:bg-white dark:text-black dark:active:bg-background dark:active:text-white"
      >
        Ver projeto
        <MoveRightIcon size="14" />
      </a>
      <a
        :href="project.repo"
        target="_blank"
        rel="noreferrer"
        class="jetbrains-mono flex w-full items-center justify-between rounded-lg bg-background px-3 py-2.5 text-xs uppercase text-white active:bg-black dark:bg-white dark:text-black dark:active:bg-background dark:active:text-white"
      >
        Ver código
        <MoveRightIcon size="14" />
      </a>
    </div>
  </div>
</template>

<script setup>
import Tags from "@/components/Projects/Tags.vue";
import { MoveRightIcon } from "lucide-vue-next";

defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>
