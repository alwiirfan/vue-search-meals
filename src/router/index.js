import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";
import NotFoundMeals from "../components/errors/NotFoundMeals.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
        meta: {
          title: "Home",
          description: "List of all available meals",
        },
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
        meta: {
          title: "Search",
          description: "Search for meals by name",
        },
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
        meta: {
          title: "Search",
          description: "Search for meals by letter",
        },
      },
      {
        path: "/by-ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
        meta: {
          title: "Search",
          description: "Search for recipes by ingredients",
        },
      },
      {
        path: "/ingredients/:ingredient?",
        name: "ingredients",
        component: Ingredients,
        meta: {
          title: "Search",
          description: "List of all available ingredients",
        },
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
        meta: {
          title: "Details",
          description: "Details of the selected meal",
        },
      },
      {
        path: "*",
        component: NotFoundMeals,
        meta: {
          title: "- 404",
          description: "Page not found",
        },
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const defaultTitle = "Meal Finder";
  let title = defaultTitle + " | " + to.meta.title;

  if (to.path === "/") {
    document.title = defaultTitle;
  } else if (to.path.split("/").length > 10) {
    document.title = title + to.path;
  } else if (to.path === "/home") {
    document.title = title;
  } else {
    document.title = title + to.path;
  }

  console.log(document.title);
  next();
});

export default router;
