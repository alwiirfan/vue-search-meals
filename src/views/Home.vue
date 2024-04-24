<template>
  <pre>{{ env }}</pre>
</template>

<script setup>
import { onMounted, ref } from "vue";
import client from "../lib/api/client.js";

const ingredients = ref([]);

onMounted(async () => {
  const res = await client.get("/list.php?i=list");

  console.log(res.data);
  ingredients.value = res.data;
});

const env = JSON.stringify(import.meta.env);
</script>

<style scoped></style>
