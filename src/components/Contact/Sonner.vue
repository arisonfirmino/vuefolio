<template>
  <div
    class="fixed bottom-10 left-1/2 right-10 z-10 w-fit -translate-x-1/2 transform rounded-md border border-solid border-background bg-container p-2.5 dark:border-white dark:border-opacity-10 md:left-auto md:-translate-x-0"
  >
    <p class="font-semibold">Mensagem enviada!</p>
    <span class="text-nowrap text-sm text-foreground">{{ formattedDate }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
});

const formattedDate = computed(() => {
  return format(props.date, "EEEE, dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
    locale: ptBR,
  });
});
</script>
