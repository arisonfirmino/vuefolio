<template>
  <footer class="mt-20 flex items-center justify-between px-5 pb-10 lg:px-0">
    <p class="text-xs text-foreground">© 2024 Arison. All Rights Reserved</p>

    <button
      v-if="!isSocialLinksVisible"
      @click="showSocialLinks"
      class="flex h-10 w-10 animate-jump-in items-center justify-center rounded-lg text-foreground duration-500 hover:bg-background hover:text-white"
    >
      <LinkIcon size="16" />
    </button>

    <div
      v-if="isSocialLinksVisible"
      class="flex animate-fade-left items-center gap-2.5"
    >
      <a
        v-for="item in socialMediaLinksItems"
        :key="item.name"
        :href="item.href"
        class="flex h-10 w-10 items-center justify-center rounded-lg text-foreground duration-500 hover:bg-background hover:text-white"
      >
        <component :is="item.icon" size="16" />
      </a>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LinkIcon,
} from "lucide-vue-next";

const socialMediaLinksItems = [
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/arisonfirmino",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/arisonfirmino",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/arisonfirmino",
  },
];

const isSocialLinksVisible = ref(false);

const showSocialLinks = () => {
  isSocialLinksVisible.value = true;
  setTimeout(() => {
    isSocialLinksVisible.value = false;
  }, 8000);
};
</script>
