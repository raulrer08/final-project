<template>
  <div class="text-3xl text-center text-blue-900">
    <h1>Send us a Messages and a Representative will Answer Shortly</h1>
  </div>

  <Messages />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTimeoutFn } from "@vueuse/core";
import { database } from "../helpers/useFirebase";
const { messages } = database();
const bottom = ref();
const { isPending, start, stop } = useTimeoutFn(() => {
  window.scrollTo({
    top: document.body.scrollHeight || document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}, 500);
onMounted(() => goToBottom());
const goToBottom = () => {
  start();
};
</script>
