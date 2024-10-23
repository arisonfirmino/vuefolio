<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.title"
      class="relative flex items-baseline gap-6 pb-6"
    >
      <div
        class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-background dark:before:bg-white dark:before:bg-opacity-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          class="bi bi-circle-fill fill-background dark:fill-white"
          viewBox="0 0 16 16"
        >
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
      <div class="space-y-1.5 text-sm">
        <h3 class="text-lg font-medium">{{ item.title }}</h3>
        <h4>{{ item.location }}</h4>
        <p class="text-foreground">{{ item.date }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Object,
    required: true,
  },
});
</script>
