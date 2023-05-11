<script setup>
import { ref, onUpdated } from "vue";

const counter = ref(0);
const elementRef = ref(null);

const increment = () => counter.value++;
const decrement = () => counter.value--;

onUpdated(() => {
  console.log(
    "Hemos cambiado el componente:" + elementRef.value.textContent + " 🔥"
  );
});
</script>

<template>
  <div class="flex items-center justify-center gap-4 text-white">
    <p class="text-lg" ref="elementRef">
      Counter usando <code>Composition API Script Setup</code>: {{ counter }}
    </p>

    <div class="flex items-center justify-center gap-6">
      <button class="bg-blue-600 btn-base" @click="increment">Aumentar</button>
      <button class="bg-red-600 btn-base" @click="decrement">Disminuir</button>
    </div>
  </div>
</template>
