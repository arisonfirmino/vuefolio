<template>
  <section id="contact" class="space-y-5">
    <Title title="Contato" />

    <p data-aos="fade-right" class="text-sm text-foreground">
      Estou à disposição para conversar! Utilize o formulário para enviar um
      e-mail diretamente para mim, ou conecte-se através do WhatsApp, LinkedIn
      ou GitHub. Vamos conversar!
    </p>

    <div class="relative flex items-center justify-center md:justify-end">
      <hr
        class="absolute w-full border-black border-opacity-10 dark:border-white dark:border-opacity-10"
      />
      <ul class="z-10 flex gap-5 md:mr-5">
        <li
          v-for="(link, index) in contactLinks"
          data-aos="zoom-in"
          :data-aos-delay="index * 100"
          :key="link.name"
          class="border-oslid h-10 w-10 rounded-full border border-black border-opacity-10 bg-container text-foreground duration-500 hover:border-background hover:text-background dark:border-white dark:border-opacity-10 dark:hover:border-opacity-100 dark:hover:text-white"
        >
          <a
            :href="link.href"
            target="_blank"
            rel="noreferrer"
            class="flex h-full w-full items-center justify-center"
          >
            <Icon :name="link.icon" />
          </a>
        </li>
      </ul>
    </div>

    <Form />
  </section>
</template>

<script setup>
import Title from "@/components/Title.vue";
import { ref } from "vue";
import Icon from "@/components/Icon.vue";
import Form from "@/components/Contact/Form.vue";

const contactLinks = ref([
  { name: "E-mail", icon: "email", href: "mailto:arisonfirmino.dev@gmail.com" },
  { name: "WhatsApp", icon: "whatsapp", href: "https://wa.me/14998794845" },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/arisonfirmino",
  },
  { name: "GitHub", icon: "github", href: "https://github.com/arisonfirmino" },
]);
</script>
