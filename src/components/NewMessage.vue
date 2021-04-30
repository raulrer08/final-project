<template>
  <div class="fixed bottom-10 left-0 right-0 flex ml-4 mr-4">
    <input
      v-model="newMessage"
      type="text"
      class="flex-grow text-xl rounded-2xl bg-purple-400 focus: outline-none"
      @change="send"
    />
    <button
      class="bg-pink-500 px-8 focus:outline-none rounded-2xl"
      @click="send"
    >
      <mdi:send-circle class="text-blue-900" />
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmit } from "vue";
import { database } from "../helpers/useFirebase";
const { sendMessage } = database();
const newMessage = ref(null);
const emit = defineEmit(["added"]);
const send = () => {
  if (newMessage.value?.length > 0) {
    sendMessage(newMessage.value);
    newMessage.value = null;
    emit("added");
  }
};
</script>
