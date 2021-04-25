<template>
  <div class="py-5 px-5 bg-pink-400 flex mr-10 rounded-r-3xl">
    <img src="../assets/awv.png" width="300" height="100" />
  </div>
  <div
    v-if="!isAuthenticated"
    class="py-2 px-5 flex mr-10 rounded-r-2xl text-blue-900 font-bold"
  >
    <button
      class="ml-auto px-4 py-2 text-blue-900 font-bold bg-purple-400 rounded-full hover:bg-yellow-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
      @click="sendToHome"
    >
      <span class="material-icons align-text-bottom" id="homeIcon">login</span>
      Login
    </button>
  </div>
  <div class="flex flex-col items-center justify-center space-y-8">
    <flat-color-icons:data-encryption class="w-20 h-20 mt-20 animate-bounce" />
    <h1 class="text-6xl font-bold tracking-wide text-pink-500">
      Please Login to Proceed
    </h1>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { authentication } from "../helpers/useFirebase";
const { isAuthenticated, user, googlePopup, signOut } = authentication();
const router = useRouter();
const sendToHome = () => {
  googlePopup();
  router.push("/home");
};
</script>
