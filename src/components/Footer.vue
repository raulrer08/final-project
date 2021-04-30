<template>
  <footer class="bg-pink-400">
    <div
      class="container flex items-center justify-between px-2 py-4 mx-auto space-x-4 space-y-2 text-coolGray-200"
    >
      <div class="text-s text-blue-900">Final Project</div>
      <img :src="tmdbLogo" alt="TMDB Logo" class="w-12" />
    </div>
  </footer>
</template>

<script setup>
import tmdbLogo from "../assets/awv.png";
</script>
