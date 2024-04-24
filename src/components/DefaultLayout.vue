<template>
  <div class="bg-gray-100 min-h-screen">
    <Navbar />
    <BackButton v-if="route.currentRoute.value.path !== '/'" />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import BackButton from "./BackButton.vue";
import Navbar from "./Navbar.vue";
import { useRouter } from "vue-router";

const route = useRouter();
</script>

<style scoped></style>
