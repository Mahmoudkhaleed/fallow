import { defineStore } from "pinia";

export const width = defineStore("width", {
  state: () => ({
    windowWidth: 0,
  }),
  actions: {
    getWidth() {
      this.windowWidth = window.innerWidth;
      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
        console.log(this.windowWidth);
      });
    },
  },
});
