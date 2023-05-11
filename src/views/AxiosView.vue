<script setup>
import useCustomFetch from "@/composables/useCustomFetch";

const { data, isLoading, error } = useCustomFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full gap-8 text-white"
  >
    <h2 class="text-4xl text-white">Peticiones con Axios</h2>

    <div v-if="isLoading">Cargando posts...</div>

    <div v-if="error">{{ error }}</div>

    <ul v-if="data" class="flex flex-col items-start justify-center gap-4">
      <li
        v-for="post in data"
        :key="post.id"
        class="flex flex-col items-start justify-center gap-2"
      >
        <h3 class="text-lg font-bold">{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>
