<template>
  <div class="py-5 px-5 bg-pink-400 flex mr-10 rounded-r-3xl">
    <img src="../assets/awv.png" width="300" height="100" />
  </div>

  <div class="bg-purple-400 py-2 px-5 flex mr-10 rounded-r-2xl text-blue-900">
    <router-link class="flex font-bold px-1 ml-auto" to="/home">
      <span class="material-icons align-text-bottom" id="homeIcon">home</span
      >Home</router-link
    >

    <router-link class="flex font-bold px-1" to="/contactus"
      ><span class="material-icons align-text-bottom" id="homeIcon"
        >phone_in_talk</span
      >Contact Us</router-link
    >
    <router-link class="flex font-bold px-2" to="/reg"
      ><span class="material-icons align-text-bottom" id="homeIcon"
        >how_to_reg</span
      >Register</router-link
    >
    <router-link class="flex font-bold px-2" to="/search"
      ><span class="material-icons align-text-bottom" id="homeIcon"
        >attribution</span
      >About</router-link
    >
  </div>
  <div
    v-if="!isAuthenticated"
    class="py-2 px-5 flex mr-10 rounded-r-2xl text-blue-900 font-bold"
  >
    <button
      class="ml-auto px-4 py-2 text-blue-900 font-bold bg-purple-400 rounded-full hover:bg-yellow-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
      @click="googlePopup"
    >
      <span class="material-icons align-text-bottom" id="homeIcon">login</span>
      Login
    </button>
  </div>
  <div
    v-else
    class="py-2 px-5 flex mr-10 rounded-r-2xl text-blue-900 font-bold"
  >
    <p>Welcome {{ user?.displayName }}</p>
    <button
      class="ml-auto px-4 py-2 text-blue-900 font-bold bg-purple-400 rounded-full hover:bg-yellow-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
      @click="signOut"
    >
      <span class="material-icons align-text-bottom" id="homeIcon">login</span>
      Logout
    </button>
  </div>
</template>

<style>
#homeIcon {
  color: #33e0ff;
  font-size: 24px;
}
</style>

<script setup>
import { authentication } from "../helpers/useFirebase";

const { isAuthenticated, user, googlePopup, signOut } = authentication();
</script>
