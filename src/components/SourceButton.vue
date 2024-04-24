<template>
  <a
    :href="meal.strSource"
    target="_blank"
    class="font-bold text-white py-2 bg-gray-400 rounded-full px-4 text-center hover:transition hover:duration-200 hover:scale-110 hover:bg-gray-600 mr-2"
    >Source</a
  >
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
});
</script>
