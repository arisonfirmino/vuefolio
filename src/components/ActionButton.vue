<template>
  <button
    @click="setShowComponent"
    data-aos="zoom-in"
    :class="[
      `flex w-full items-center justify-between border-b border-solid border-black p-2.5 uppercase dark:border-white`,
      showComponent
        ? 'border-opacity-100 dark:border-opacity-100'
        : 'border-opacity-10 dark:border-opacity-10',
    ]"
  >
    {{ title }}
    <component :is="showComponent ? ArrowUpIcon : ArrowDownIcon" size="16" />
  </button>
</template>

<script setup>
import { ArrowDownIcon, ArrowUpIcon } from "lucide-vue-next";

defineProps({
  title: {
    type: String,
    required: true,
  },
  showComponent: {
    type: Boolean,
    required: true,
  },
  setShowComponent: {
    type: Function,
    required: true,
  },
});
</script>
