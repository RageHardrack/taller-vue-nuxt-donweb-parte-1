<script setup>
import CounterCA from "../components/counter/counterCA.vue";
import CounterCASS from "../components/counter/CounterCASS.vue";
import CounterOA from "../components/counter/CounterOA.vue";
</script>

<template>
  <section class="flex flex-col w-full items-center justify-center gap-8">
    <h2 class="text-4xl text-white">Ejemplo de Counter</h2>

    <div
      class="flex flex-col items-start gap-8 border border-white p-8 rounded"
    >
      <!-- <CounterCA /> -->
      <!-- <CounterCASS /> -->
      <CounterOA />
    </div>
  </section>
</template>
