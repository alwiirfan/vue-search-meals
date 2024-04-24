<template>
  <div class="w-full p-8 bg-gray-300 md:w-1/2 rounded my-6">
    <h3 class="text-2xl font-bold py-4 px-2 text-center">{{ ingredients }}</h3>
    <ul class="flex flex-col gap-2 my-5">
      <template v-for="(el, ind) of new Array(20)" :key="ind">
        <li
          v-if="
            meal[`strIngredient${ind + 1}`] &&
            meal[`strMeasure${ind + 1}`] !== ''
          "
          class="p-2 border-2 border-black rounded m-1"
        >
          {{ toRoman(ind + 1) }}. {{ meal[`strIngredient${ind + 1}`] }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import toRoman from "../utils/roman-util.js";

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
  ingredients: {
    type: String,
  },
});
</script>
