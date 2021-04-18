<template>
  <div class="py-5 px-5 bg-pink-400 flex mr-10 rounded-r-3xl">
    <img src="../assets/awv.png" width="300" height="100" />
  </div>

  <div class="bg-purple-400 py-2 px-5 flex mr-10 rounded-r-2xl text-blue-900">
    <router-link class="flex font-bold px-1 ml-auto" to="/">
      <span class="material-icons align-text-bottom" id="homeIcon">home</span
      >Home</router-link
    >
    <router-link class="flex font-bold px-2" to="/login"
      ><span class="material-icons align-text-bottom" id="homeIcon">login</span
      >Login</router-link
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
</template>

<style>
#homeIcon {
  color: #33e0ff;
  font-size: 24px;
}
</style>
