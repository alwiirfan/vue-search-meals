<template>
  <a
    :href="href"
    target="_blank"
    class="bg-red-500 hover:bg-red-700 hover:scale-105 hover:transition hover:duration-200 px-4 rounded-full text-white font-bold py-2 mx-1"
    >YouTube</a
  >
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
