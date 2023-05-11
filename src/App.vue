<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <section
    class="flex flex-col items-center justify-center w-screen min-h-screen bg-zinc-700"
  >
    <TheNavbar />

    <main class="container flex flex-1 py-8">
      <RouterView />
    </main>

    <TheFooter />
  </section>
</template>
