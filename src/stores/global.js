import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    title: "Taller de VueJS"
  }),
  getters: {
    getTitle: (state) => state.title
  },
  actions: {
    changeTitle(newTitle){
      this.title = newTitle;
    }
  },
});
