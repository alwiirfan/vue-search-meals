<template>
  <div
    v-if="!hidden && route.currentRoute.value.path !== '/'"
    class="items-center justify-start p-2 w-[14%] md:w-[3.8%] border-2 border-solid ml-4 mt-4 md:ml-10 rounded hover:scale-110 hover:transition-transform hover:duration-300"
  >
    <ph-arrow-fat-lines-left
      @click="goBack"
      class="text-4xl md:text-5xl hover:cursor-pointer hover:text-gray-600"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const route = useRouter();
const hidden = ref(false);

const goBack = () => {
  window.history.go(-1);
};

onMounted(() => {
  if (window.history.length > 1 && route.currentRoute.value.path !== "/") {
    hidden.value = false;
  } else {
    hidden.value = true;
  }
});
</script>
