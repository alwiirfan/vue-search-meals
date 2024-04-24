<template>
  <div class="p-8">
    <h3 class="text-3xl ml-4 md:text-4xl font-bold md:ml-16">Ingredients</h3>
    <div class="relative w-11/12 mx-auto">
      <input
        type="text"
        class="rounded border-2 border-gray-200 w-full p-2 my-6"
        placeholder="Search for Ingredients"
        v-model="keyword"
      />
    </div>
    <div
      class="bg-white rounded p-4 my-4 w-11/12 mx-auto hover:transition hover:scale-105 hover:duration-200"
      v-for="ingredient in filteredIngredients"
      :key="ingredient.idIngredient"
    >
      <router-link
        :to="{
          name: 'ingredients',
          params: { ingredient: ingredient.strIngredient },
        }"
        class="flex flex-col pb-5"
      >
        <h3 class="text-2xl md:text-3xl font-extrabold py-2">
          {{ ingredient.strIngredient }}
        </h3>
        <p v-if="ingredient.strDescription" class="text-sm md:text-base">
          {{ ingredient.strDescription }}
        </p></router-link
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import client from "../lib/api/client";

const keyword = ref("");
const ingredients = ref([]);

onMounted(async () => {
  const res = await client.get("/list.php?i=list");
  ingredients.value = res.data.meals;
});

const filteredIngredients = computed(() => {
  if (!ingredients.value.length) return [];
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});
</script>

<style lang="scss" scoped></style>
