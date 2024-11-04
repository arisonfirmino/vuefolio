<template>
  <section class="space-y-5">
    <ActionButton
      title="Timeline"
      :showComponent="showTimeline"
      :setShowComponent="setShowTimeline"
    />

    <div v-if="showTimeline" class="flex flex-col gap-5 md:flex-row md:gap-0">
      <EducationTimeline />
      <ExperienceTimeline />
    </div>
  </section>
</template>

<script setup>
import ActionButton from "@/components/ActionButton.vue";
import { ref } from "vue";
import EducationTimeline from "@/components/Timeline/EducationTimeline.vue";
import ExperienceTimeline from "@/components/Timeline/ExperienceTimeline.vue";

const showTimeline = ref(false);

const setShowTimeline = () => {
  showTimeline.value = !showTimeline.value;
};
</script>
