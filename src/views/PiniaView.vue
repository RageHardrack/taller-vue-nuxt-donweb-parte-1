<script setup>
import { useGlobalStore } from "@/stores/global";
import { ref } from "vue";

const store = useGlobalStore();
const newTitle = ref("");

const handleChange = () => {
  store.changeTitle(newTitle.value);
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full gap-8 text-white"
  >
    <h2 class="text-4xl text-white">{{ store.getTitle }}</h2>

    <input type="text" v-model="newTitle" class="p-3 text-black rounded" />

    <div class="flex items-center justify-center gap-6">
      <button
        @click="store.changeTitle('Nuevo título')"
        class="bg-blue-600 btn-base"
      >
        Nuevo título
      </button>
      <button
        @click="store.changeTitle('Taller de VueJS')"
        class="bg-yellow-600 btn-base"
      >
        Título original
      </button>
      <button @click="handleChange" class="bg-green-600 btn-base">
        Agregar título
      </button>
    </div>
  </div>
</template>
