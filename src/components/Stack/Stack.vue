<template>
  <section id="stack" class="space-y-5">
    <Title title="Stack" />

    <p data-aos="fade-right" class="text-sm text-foreground">
      Aqui estão as habilidades que desenvolvi na programação, incluindo
      linguagens, frameworks, bibliotecas e ferramentas. Explore para conhecer
      melhor meu conhecimento técnico.
    </p>

    <FrontendStack />
    <BackendStack />

    <div class="flex flex-col gap-5 md:flex-row">
      <div class="w-full space-y-5">
        <ActionButton
          title="Bibliotecas"
          :showComponent="showLibrary"
          :setShowComponent="setShowLibrary"
        />

        <LibraryStack v-if="showLibrary" />
      </div>

      <div class="w-full space-y-5">
        <ActionButton
          title="Ferramentas"
          :showComponent="showTools"
          :setShowComponent="setShowTools"
        />

        <ToolStack v-if="showTools" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from "@/components/Title.vue";
import FrontendStack from "@/components/Stack/FrontendStack.vue";
import BackendStack from "@/components/Stack/BackendStack.vue";
import ActionButton from "@/components/ActionButton.vue";
import { ref } from "vue";
import LibraryStack from "@/components/Stack/LibraryStack.vue";
import ToolStack from "@/components/Stack/ToolStack.vue";

const showLibrary = ref(false);
const showTools = ref(false);

const setShowLibrary = () => {
  showLibrary.value = !showLibrary.value;
};

const setShowTools = () => {
  showTools.value = !showTools.value;
};
</script>
