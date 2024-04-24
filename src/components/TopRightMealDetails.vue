<template>
  <div class="py-4">
    <h3 class="text-2xl py-4 bg-gray-200 rounded p-2 text-center">
      {{ category }}
      <span class="text-2xl font-bold">{{ meal.strCategory }}</span>
    </h3>
    <h3 class="text-2xl font-bold py-4 px-2 text-center md:text-start">
      {{ intruction }}
    </h3>
    <p class="text-base text-start">
      {{ meal.strInstructions }}
    </p>

    <h3
      class="text-2xl py-4 bg-gray-200 rounded px-2 my-4 text-center md:text-start"
    >
      from : <span class="text-2xl font-bold">{{ meal.strArea }}</span>
    </h3>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
  category: {
    type: String,
  },
  intruction: {
    type: String,
  },
});
</script>
