<template>
  <div data-aos="fade-left" class="flex items-center justify-between">
    <div class="hidden items-center gap-2.5 md:flex">
      <a
        href="mailto:arisonfirmino.dev@gmail.com"
        target="_blank"
        rel="noreferrer"
        class="text-sm hover:underline"
        >arisonfirmino.dev@gmail.com</a
      >

      <button @click="handleCopyEmail" class="active:text-foreground">
        <component :is="isCopied ? CopyCheckIcon : CopyIcon" size="14" />
      </button>
    </div>

    <a
      href="https://wa.me/14998794845"
      target="_blank"
      rel="noreferrer"
      class="jetbrains-mono flex w-full items-center justify-center gap-2.5 rounded-lg bg-background px-3 py-2.5 text-xs uppercase text-white active:bg-black dark:bg-white dark:text-black dark:active:bg-background dark:active:text-white md:w-fit md:justify-normal"
    >
      <Icon name="whatsapp" />
      Me chame no whatsapp
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Icon from "@/components/Icon.vue";
import { CopyIcon, CopyCheckIcon } from "lucide-vue-next";

const isCopied = ref(false);

const handleCopyEmail = () => {
  navigator.clipboard.writeText("arisonfirmino.dev@gmail.com").then(() => {
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 5000);
  });
};
</script>
