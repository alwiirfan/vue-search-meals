<template>
  <div
    class="flex justify-center items-center p-2 md:p-4 text-2xl md:text-4xl font-bold"
  >
    <h3>{{ route.currentRoute.value.params.ingredient }}</h3>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-9 md:gap-5 p-8" v-if="meals">
    <MealItems v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import store from "../store";
import MealItems from "../components/MealItems.vue";

const route = useRouter();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch(
    "searchMealsByIngredient",
    route.currentRoute.value.params.ingredient
  );
});
</script>

<style lang="scss" scoped></style>
