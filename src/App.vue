<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script>
import AppLayout from "./components/global/AppLayout.vue";

export default {
  components: { AppLayout },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,400&display=swap");

*,
html,
body {
  font-family: "Work Sans", sans-serif !important;
}
::-webkit-scrollbar {
  width: 0;
}
</style>
