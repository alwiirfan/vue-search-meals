<template>
  <div class="flex justify-center w-11/12 md:h-40 md:w-11/12 items-center py-2">
    <h3 class="text-xl md:text-3xl font-bold">{{ message }}</h3>
    <ph-smiley-blank
      class="text-4xl md:text-[86px] font-bold items-center justify-center mb-[0.5%] md:mb-0"
    />
  </div>
  <div class="flex items-center justify-center px-4">
    <p class="text-xl md:text-3xl font-bold">{{ command }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  command: {
    type: String,
    required: true,
  },
});
</script>
