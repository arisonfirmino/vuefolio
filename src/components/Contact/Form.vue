<template>
  <form @submit.prevent="onSubmit" class="space-y-5 text-sm">
    <div class="flex flex-col gap-5 md:flex-row">
      <FormInput
        data-aos="fade-right"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        v-model="state.name"
        :error="
          v$.name.$error
            ? 'Este campo é obrigatório e deve ter pelo menos 3 caracteres.'
            : ''
        "
      />

      <FormInput
        data-aos="fade-left"
        label="Email"
        placeholder="Insira seu endereço de e-mail"
        v-model="state.email"
        :error="v$.email.$error ? 'Por favor, insira um e-mail válido.' : ''"
      />
    </div>

    <FormInput
      data-aos="zoom-in"
      label="Assunto"
      placeholder="Insira o assunto da mensagem"
      v-model="state.subject"
      :error="
        v$.subject.$error
          ? 'Este campo é obrigatório e deve ter pelo menos 3 caracteres.'
          : ''
      "
    />

    <FormTextarea
      data-aos="zoom-in"
      rows="3"
      label="Mensagem"
      placeholder="Escreva sua mensagem aqui"
      v-model="state.message"
      :error="
        v$.message.$error
          ? 'Este campo é obrigatório e deve ter pelo menos 3 caracteres.'
          : ''
      "
    />

    <button
      type="submit"
      class="jetbrains-mono flex w-full items-center justify-center gap-2.5 rounded-lg bg-background px-3 py-2.5 text-xs uppercase text-white active:bg-black dark:bg-white dark:text-black dark:active:bg-background dark:active:text-white md:w-fit md:justify-normal"
    >
      <SendIcon size="12" />
      Enviar mensagem
    </button>
  </form>

  <Sonner v-if="isSubmitted" :date="submittedDate" />
</template>

<script>
import { reactive, computed, ref } from "vue";

import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

import emailjs from "emailjs-com";

import FormInput from "@/components/Contact/FormInput.vue";
import FormTextarea from "@/components/Contact/FormTextarea.vue";
import Sonner from "@/components/Contact/Sonner.vue";

import { SendIcon } from "lucide-vue-next";

export default {
  components: {
    FormInput,
    FormTextarea,
    Sonner,
    SendIcon,
  },
  setup() {
    const state = reactive({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(3) },
        email: { required, email },
        subject: { required, minLength: minLength(3) },
        message: { required, minLength: minLength(3) },
      };
    });

    const v$ = useVuelidate(rules, state);

    const isSubmitted = ref(false);
    const submittedDate = ref(null);

    const resetForm = () => {
      state.name = "";
      state.email = "";
      state.subject = "";
      state.message = "";
    };

    const onSubmit = () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        const service_id = import.meta.env.VITE_SERVICE_ID;
        const template_id = import.meta.env.VITE_TEMPLATE_ID;
        const public_id = import.meta.env.VITE_PUBLIC_KEY;

        const templateParams = {
          name: state.name,
          email: state.email,
          subject: state.subject,
          message: state.message,
        };

        emailjs
          .send(service_id, template_id, templateParams, public_id)
          .then(() => {
            resetForm();

            submittedDate.value = new Date();
            isSubmitted.value = true;

            setTimeout(() => {
              isSubmitted.value = false;
            }, 5000);
          });
      }
    };

    return {
      state,
      v$,
      isSubmitted,
      submittedDate,
      onSubmit,
    };
  },
};
</script>
