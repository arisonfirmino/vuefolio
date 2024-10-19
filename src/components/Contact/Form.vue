<template>
  <form class="space-y-5">
    <div class="flex flex-col gap-5 md:flex-row">
      <div class="flex w-full flex-col gap-1">
        <label class="flex gap-1.5 uppercase"
          >Nome completo
          <AsteriskIcon size="12" class="text-red-600" />
        </label>
        <input
          type="text"
          placeholder="Digite seu nome completo"
          class="border-b border-solid border-black border-opacity-10 bg-transparent p-2.5 outline-none focus:border-background dark:border-white dark:border-opacity-10 dark:focus:border-opacity-100"
        />
      </div>

      <div class="flex w-full flex-col gap-1">
        <label class="flex gap-1.5 uppercase"
          >Email
          <AsteriskIcon size="12" class="text-red-600" />
        </label>
        <input
          type="text"
          placeholder="Insira seu endereço de e-mail"
          class="border-b border-solid border-black border-opacity-10 bg-transparent p-2.5 outline-none focus:border-background dark:border-white dark:border-opacity-10 dark:focus:border-opacity-100"
        />
      </div>
    </div>

    <div class="flex w-full flex-col gap-1">
      <label class="flex gap-1.5 uppercase"
        >Mensagem
        <AsteriskIcon size="12" class="text-red-600" />
      </label>
      <textarea
        rows="3"
        placeholder="Escreva sua mensagem aqui"
        class="resize-none border-b border-solid border-black border-opacity-10 bg-transparent p-2.5 outline-none focus:border-background dark:border-white dark:border-opacity-10 dark:focus:border-opacity-100"
      ></textarea>
    </div>

    <div class="flex items-center justify-between">
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-white"
      >
        <PaperclipIcon size="20" />
      </button>

      <button
        type="submit"
        class="flex items-center gap-2.5 rounded-lg bg-background px-5 py-2 text-white dark:bg-white dark:text-black"
      >
        <SendIcon size="16" />
        Enviar mensagem
      </button>
    </div>
  </form>
</template>

<script setup>
import { AsteriskIcon, SendIcon, PaperclipIcon } from "lucide-vue-next";
</script>
