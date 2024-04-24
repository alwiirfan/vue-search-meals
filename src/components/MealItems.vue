<template>
  <div
    class="rounded border-2 border-white shadow transition hover:shadow-2xl pb-3"
  >
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="transition duration-300 hover:opacity-80 hover:scale-[1.02] h-64 w-full rounded object-cover"
    />
    <div class="px-4">
      <h3 class="text-xl font-bold py-2">{{ meal.strMeal.slice(0, 20) }}...</h3>
      <p class="text-base py-4">{{ meal.strInstructions.slice(0, 80) }}...</p>
      <div class="flex items-center">
        <div v-if="meal.strYoutube" class="flex items-center justify-center">
          <YouTubeButton :href="meal.strYoutube" />
        </div>
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="bg-purple-500 hover:bg-purple-700 hover:scale-105 hover:transition hover:duration-200 px-4 rounded-full text-white font-bold py-2 mx-1"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>
