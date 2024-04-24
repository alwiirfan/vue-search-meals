import client from "../lib/api/client";

export async function searchMeals({ commit }, keyword) {
  await client.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export async function searchMealsByLetter({ commit }, letter) {
  await client.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export async function searchMealsByIngredient({ commit }, ingredient) {
  await client.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}
