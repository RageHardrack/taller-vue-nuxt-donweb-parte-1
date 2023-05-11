<script setup>
import { onMounted } from "vue";
import CounterCASS from "../components/counter/CounterCASS.vue";

console.log("Se crea el componente ⚙️");

onMounted(() => {
  console.log("Al cargar el componente ✔️");
});
</script>

<template>
  <section class="flex flex-col items-center justify-center w-full gap-8">
    <h2 class="text-4xl text-white">Ciclos de Vida de VueJS</h2>
    <CounterCASS />
  </section>
</template>
