<template>
  <div class="flex w-full flex-col gap-1">
    <label class="flex gap-1.5 font-medium uppercase"
      >{{ label }}
      <AsteriskIcon size="12" class="text-red-600" />
    </label>
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
        `border-b border-solid bg-transparent p-2.5 outline-none`,
        error
          ? 'border-red-600 border-opacity-100 dark:border-opacity-100'
          : 'border-black border-opacity-10 focus:border-background dark:border-white dark:border-opacity-10 dark:focus:border-opacity-100',
      ]"
    />
    <small v-if="error" class="ml-1 mt-1 text-red-600">{{ error }}</small>
  </div>
</template>

<script setup>
import { AsteriskIcon } from "lucide-vue-next";

defineProps({
  label: String,
  placeholder: String,
  modelValue: String,
  error: String,
});
</script>
