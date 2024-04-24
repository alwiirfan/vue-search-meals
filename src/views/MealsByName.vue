<template>
  <div class="md:w-11/12 mx-auto p-8 pb-0 relative">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full p-2 my-6"
      placeholder="Search for meals"
      v-model="keyword"
      @change="searchMeals"
    />
    <ph-magnifying-glass
      :size="32"
      class="absolute top-[50%] right-[9.5%] md:top-[50%] md:right-[4.5%] mds: lg:top-[50%] lg:right-[2.5%] text-3xl hover:cursor-pointer md:hover:scale-110 md:hover:text-gray-700 text-gray-400"
      @click="searchMeals"
      v-if="keyword"
    />
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
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRouter } from "vue-router";
import NotFoundMeals from "../components/errors/NotFoundMeals.vue";
import MealItems from "../components/MealItems.vue";

const route = useRouter();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
};

onMounted(() => {
  keyword.value = route.currentRoute.value.params.name;

  if (keyword.value) {
    searchMeals();
  }
});
</script>
