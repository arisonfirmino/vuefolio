<template>
  <div
    class="jetbrains-mono hidden items-center gap-2.5 text-xs text-foreground md:flex"
  >
    <Icon name="building-skyscraper" />
    <p>{{ locationText }}</p>
  </div>
</template>

<script setup>
import Icon from "@/components/Icon.vue";

const locationText = "marília, sp";
</script>
