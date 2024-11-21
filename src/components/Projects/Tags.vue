<template>
  <ul
    class="flex gap-2.5 overflow-x-scroll px-5 pt-2 [&::-webkit-scrollbar]:hidden"
  >
    <li
      v-for="tag in sortTags(tags)"
      :key="tag"
      class="rounded-full bg-gray-200 px-2.5 py-0.5 text-xs lowercase text-foreground dark:bg-background dark:text-white"
    >
      {{ tag }}
    </li>
  </ul>
</template>

<script setup>
import { sortTags } from "@/helpers/sortHelpers";

defineProps({
  tags: {
    type: Object,
    required: true,
  },
});
</script>
