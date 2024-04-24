<template>
  <nav
    id="topSection"
    :class="{
      'bg-transparent bg-opacity-5 backdrop-blur-md': isTransparent,
      'bg-white': !isTransparent,
    }"
    class="shadow-md h-16 flex justify-between items-stretch fixed top-0 left-0 right-0 z-10"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex px-4 items-center transition-colors hover:bg-purple-200"
      >Home</router-link
    >

    <!-- Tombol hamburger -->
    <button
      @click="toggleMenu"
      class="block md:hidden px-4 py-2 text-gray-600 focus:outline-none"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-show="!isMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
        <path
          v-show="isMenuOpen === true"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>

    <div :class="isMenuOpen ? 'block' : 'hidden'" class="md:flex">
      <div
        @click="toggleMenu"
        :class="{
          'bg-transparent bg-opacity-5 backdrop-blur-md': isTransparent,
          'bg-white': !isTransparent,
        }"
        class="md:flex flex-col md:p-0 md:flex-row items-center md:gap-0"
      >
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex p-2 h-full transition-colors hover:bg-purple-100 justify-between items-center"
          >Search Meals
          <ph-bowl-food
            :size="22"
            class="md:hidden hover:cursor-pointer hover:scale-110 hover:text-gray-700 text-orange-700 ml-2 mb-1"
        /></router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex p-2 h-full transition-colors hover:bg-purple-100 justify-between items-center"
          >Search By Letter
          <ph-letter-circle-h
            :size="24"
            class="md:hidden hover:cursor-pointer hover:scale-110 hover:text-gray-700 text-red-600 ml-2"
        /></router-link>
        <router-link
          :to="{ name: 'byIngredient' }"
          class="inline-flex p-2 h-full transition-colors hover:bg-purple-100 justify-between items-center"
          >Search By Ingredients
          <ph-book-bookmark
            :size="22"
            class="md:hidden hover:cursor-pointer hover:scale-110 hover:text-gray-700 text-gray-600 ml-2"
        /></router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);
const isTransparent = ref(true);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const topSection = document.getElementById("topSection");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      topSection.classList.add("shadow-md");
      isTransparent.value = true;
    } else {
      topSection.classList.remove("shadow-md");
      isTransparent.value = false;
    }
  });
});
</script>

<style scoped></style>
