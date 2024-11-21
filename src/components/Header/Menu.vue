<template>
  <nav>
    <ul class="flex gap-10">
      <li
        v-for="item in menu"
        :key="item.title"
        :class="[
          'jetbrains-mono text-sm uppercase',
          currentSection === item.href.replace('#', '')
            ? 'animate-jump text-black animate-duration-500 dark:text-white'
            : 'text-foreground',
        ]"
      >
        <a :href="item.href" @click.prevent="setActive(item.href)">
          <component :is="item.icon" size="20" class="md:hidden" />
          <span class="hidden md:block"> {{ item.title }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

import {
  BriefcaseIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MessagesSquareIcon,
  UserIcon,
} from "lucide-vue-next";

const menu = ref([
  { title: "Home", icon: HomeIcon, href: "#home" },
  { title: "Sobre", icon: UserIcon, href: "#about" },
  { title: "Projetos", icon: BriefcaseIcon, href: "#projects" },
  { title: "Stack", icon: LayoutDashboardIcon, href: "#stack" },
  { title: "Contato", icon: MessagesSquareIcon, href: "#contact" },
]);

const currentSection = ref("home");

const setActive = (href) => {
  currentSection.value = href.replace("#", "");
  scrollToSection(href);
};

const scrollToSection = (href) => {
  const section = document.querySelector(href);
  const headerHeight = document.querySelector("header").offsetHeight;

  if (section) {
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionPosition - headerHeight - 20,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.getAttribute("id");
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});
</script>
