<script setup>
import { RouterLink } from "vue-router";
import { useGlobalStore } from "@/stores/global";

const store = useGlobalStore();
</script>

<template>
  <header
    class="flex items-center justify-center w-full p-4 text-white bg-zinc-800"
  >
    <nav class="container flex items-center justify-between w-full">
      <h1 class="text-6xl">{{ store.getTitle }}</h1>
      <div class="flex items-center justify-center gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/counter">Counter</RouterLink>
        <RouterLink to="/ciclos">Ciclos</RouterLink>
        <RouterLink to="/axios">Axios</RouterLink>
        <RouterLink to="/pinia">Pinia</RouterLink>
      </div>
    </nav>
  </header>
</template>
