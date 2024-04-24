<template>
  <div
    class="flex justify-center gap-1 pt-16 md:gap-2 md:py-12 w-11/12 mx-auto"
  >
    <router-link
      v-for="letter in letters"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      class="flex text-[15px] md:text-2xl font-bold hover:underline hover:text-gray-500 cursor-pointer"
      @click="searchMealsByLetter(letter)"
      >{{ letter }}</router-link
    >
  </div>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-9 md:gap-5 p-8" v-if="meals">
    <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div class="flex flex-col justify-center items-center w-full" v-else>
    <NotFoundMeals
      :message="`No meal found`"
      :command="`Please search again!!`"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";
import { useRouter } from "vue-router";
import MealItems from "../components/MealItems.vue";
import NotFoundMeals from "../components/errors/NotFoundMeals.vue";

const route = useRouter();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

const searchMealsByLetter = (letter) => {
  store.dispatch("searchMealsByLetter", letter);
};
</script>
