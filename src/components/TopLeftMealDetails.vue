<template>
  <div class="px-4">
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="h-90 md:h-96 w-full rounded-full object-cover hover:scale-105 hover:transition hover:duration-200 hover:shadow-black/100 hover:shadow-lg"
    />
    <h3
      class="text-3xl font-bold py-4 text-center hover:scale-105 hover:transition hover:duration-200"
    >
      {{ meal.strMeal && meal.strMeal.split(" ")[0] }}
    </h3>

    <h3 v-if="meal.strTags" class="text-2xl py-2 text-center">
      {{ tag }}
      <span class="text-2xl font-bold">{{
        meal.strTags.split(",")[0] || meal.strTags.split(", ")[0]
      }}</span>
    </h3>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
  tag: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
