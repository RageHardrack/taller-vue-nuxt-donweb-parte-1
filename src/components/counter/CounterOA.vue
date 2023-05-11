<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>

<template>
  <div class="text-white flex items-center justify-center gap-4">
    <p class="text-lg">
      Counter usando <code>Options API</code>: {{ counter }}
    </p>

    <div class="flex justify-center items-center gap-6">
      <button class="btn-base bg-blue-600" @click="increment">Aumentar</button>
      <button class="btn-base bg-red-600" @click="decrement">Disminuir</button>
    </div>
  </div>
</template>
