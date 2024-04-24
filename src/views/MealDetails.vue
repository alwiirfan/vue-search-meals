<template>
  <div class="flex w-11/12 p-8 bg-gray-300 md:w-11/12 mx-auto rounded my-6">
    <div class="md:flex md:justify-between w-full">
      <TopLeftMealDetails :meal="meal" :tag="`Tag : `" />

      <div class="md:w-2/3 px-4">
        <TopRightMealDetails
          :meal="meal"
          :intruction="`Instructions`"
          :category="`Category : `"
        />

        <div class="flex items-center justify-center">
          <SourceButton :meal="meal" v-if="meal.strSource" />

          <div v-if="meal.strYoutube" class="flex items-center justify-center">
            <YouTubeButton :href="meal.strYoutube" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex md:flex-col w-11/12 mx-auto">
    <div class="md:flex md:justify-between w-full md:gap-5">
      <BottomLeftMealDetails :meal="meal" :ingredients="`Ingredients:`" />

      <BottomRightMealDetails :meal="meal" :measure="`Measures:`" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import client from "../lib/api/client";
import YouTubeButton from "../components/YouTubeButton.vue";
import TopLeftMealDetails from "../components/TopLeftMealDetails.vue";
import TopRightMealDetails from "../components/TopRightMealDetails.vue";
import SourceButton from "../components/SourceButton.vue";
import BottomLeftMealDetails from "../components/BottomLeftMealDetails.vue";
import BottomRightMealDetails from "../components/BottomRightMealDetails.vue";

const route = useRouter();
const meal = ref({});

onMounted(() => {
  client
    .get(`/lookup.php?i=${route.currentRoute.value.params.id}`)
    .then((res) => {
      meal.value = res.data.meals[0];
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style lang="scss" scoped></style>
