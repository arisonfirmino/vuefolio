<template>
  <section id="contact" class="space-y-5">
    <Title title="Contato" />

    <p data-aos="fade-right" class="text-sm text-foreground">
      Estou à disposição para conversar! Utilize o formulário para enviar um
      e-mail diretamente para mim, ou conecte-se através do WhatsApp. Vamos
      conversar!
    </p>

    <ContactActions />

    <Form />
  </section>
</template>

<script setup>
import Title from "@/components/Title.vue";
import ContactActions from "@/components/Contact/ContactActions.vue";
import Form from "@/components/Contact/Form.vue";
</script>
