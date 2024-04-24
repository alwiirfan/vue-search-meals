<template>
  <div
    class="flex justify-center items-center p-2 md:p-4 text-2xl md:text-4xl font-bold mt-16"
  >
    <h3>Other Meals</h3>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-9 md:gap-5 p-8" v-if="meals">
    <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import client from "../lib/api/client.js";
import MealItems from "../components/MealItems.vue";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 12; i++) {
    await client
      .get("/random.php")
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>

<style scoped></style>
