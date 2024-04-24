import axios from "axios";

const mealAPI = import.meta.env.VITE_MEAL_API_URL;

const client = axios.create({
  baseURL: mealAPI,
});

export default client;
