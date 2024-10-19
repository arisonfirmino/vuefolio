<template>
  <form>
    <input
      type="text"
      placeholder="Pesquise por um projeto"
      @input="onInput"
      class="w-full rounded-lg border border-solid border-black border-opacity-10 bg-transparent p-2.5 outline-none focus:border-opacity-100 dark:border-white dark:border-opacity-10 dark:focus:border-opacity-100"
    />
  </form>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["update-search"]);

const onInput = (event) => {
  emit("update-search", event.target.value);
};
</script>
