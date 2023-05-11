<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);

    const increment = () => counter.value++;
    const decrement = () => counter.value--;

    return { counter, increment, decrement };
  },
};
</script>

<template>
  <div class="text-white flex items-center justify-center gap-4">
    <p class="text-lg">
      Counter usando <code>Composition API Setup()</code>: {{ counter }}
    </p>

    <div class="flex justify-center items-center gap-6">
      <button class="btn-base bg-blue-600" @click="increment">Aumentar</button>
      <button class="btn-base bg-red-600" @click="decrement">Disminuir</button>
    </div>
  </div>
</template>
