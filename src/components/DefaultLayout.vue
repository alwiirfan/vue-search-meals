<template>
  <div class="bg-gray-100 min-h-screen">
    <Navbar />
    <BackButton />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import BackButton from "./BackButton.vue";
import Navbar from "./Navbar.vue";
</script>

<style scoped></style>
