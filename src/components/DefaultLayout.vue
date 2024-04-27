<template>
  <div class="bg-gray-100 min-h-screen">
    <Navbar />
    <BackButton v-if="route.currentRoute.value.path !== '/'" />
    <div
      v-if="route.currentRoute.value.path === '/'"
      class="flex items-center flex-col p-2 md:p-4 text-2xl md:text-4xl mt-16 w-full h-full"
    >
      <h3 class="font-bold">Welcome to Recipe App</h3>
      <div
        class="justify-center items-center flex flex-col md:h-80 md:w-full py-10 md:mt-20"
      >
        <img
          src="../assets/food.jpg"
          alt="image of food"
          class="hover:scale-110 hover:transition-transform hover:duration-300 mx-auto w-52 border-solid border-8 border-gray-300 inset-0 border-transparent animate-rainbow"
        />
        <p class="text-center text-base md:text-2xl p-5">
          this is a recipe app for searcing recipes of your choice. if you want
          to search for recipes based on ingredients, click on the search button
        </p>
      </div>
    </div>
    <main>
      <router-view />
    </main>
  </div>
  <Footer />
</template>

<script setup>
import BackButton from "./BackButton.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import { useRouter } from "vue-router";

const route = useRouter();
</script>

<style scoped>
@keyframes rainbow {
  0% {
    border-color: gray;
  }
  16.666% {
    border-color: black;
  }
  33.333% {
    border-color: gray;
  }
  50% {
    border-color: black;
  }
  66.666% {
    border-color: gray;
  }
  83.333% {
    border-color: black;
  }
  100% {
    border-color: gray;
  }
}

.animate-rainbow {
  animation: rainbow 7s infinite linear;
  transition-timing-function: linear;
}
</style>
