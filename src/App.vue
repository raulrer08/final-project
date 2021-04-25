<template>
  <Navbar v-if="isAuthenticated" />
  <loginintro v-else />
  <router-view />
</template>

<style>
#app {
}
</style>

<script setup>
import { authentication } from "../src/helpers/useFirebase";

const { isAuthenticated } = authentication();
</script>
