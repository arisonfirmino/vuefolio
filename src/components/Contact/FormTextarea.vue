<template>
  <div class="flex w-full flex-col gap-1">
    <label class="flex gap-1.5 font-medium uppercase"
      >{{ label }}
      <AsteriskIcon size="12" class="text-red-600" />
    </label>
    <textarea
      :rows="rows"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
        `resize-none border-b border-solid border-opacity-10 bg-transparent p-2.5 outline-none`,
        error
          ? 'resize-none border-red-600 dark:border-opacity-100'
          : 'border-black focus:border-background dark:border-white dark:border-opacity-10 dark:focus:border-opacity-100',
      ]"
    ></textarea>
    <small v-if="error" class="ml-1 mt-1 text-red-600">{{ error }}</small>
  </div>
</template>

<script setup>
import { AsteriskIcon } from "lucide-vue-next";

defineProps({
  label: String,
  placeholder: String,
  rows: String,
  modelValue: String,
  error: String,
});
</script>
