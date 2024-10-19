<template>
  <nav>
    <ul class="flex gap-5">
      <li
        v-for="item in menu"
        :key="item.title"
        :class="[
          `flex h-10 w-10 items-center justify-center rounded-lg uppercase md:h-auto md:w-auto md:px-2.5 md:py-2`,
          currentSection === item.href.replace('#', '')
            ? 'bg-background text-white'
            : 'text-black dark:text-white',
        ]"
      >
        <a :href="item.href" @click.prevent="setActive(item.href)" class="z-10">
          <component :is="item.icon" size="20" class="md:hidden" />
          <span class="hidden md:block"> {{ item.title }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {
  BriefcaseIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MessagesSquareIcon,
  UserIcon,
} from "lucide-vue-next";
import { ref, onMounted } from "vue";

const menu = ref([
  { title: "Home", icon: HomeIcon, href: "#home" },
  { title: "Sobre", icon: UserIcon, href: "#about" },
  { title: "Projetos", icon: BriefcaseIcon, href: "#projects" },
  { title: "Stack", icon: LayoutDashboardIcon, href: "#stack" },
  { title: "Contato", icon: MessagesSquareIcon, href: "#contact" },
]);

const active = ref("#home");
const currentSection = ref("home");

const setActive = (href) => {
  active.value = href;
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
    {
      threshold: 0.5,
    },
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});
</script>
