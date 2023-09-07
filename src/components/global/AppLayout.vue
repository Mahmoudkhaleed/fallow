<template>
  <v-layout class="overflow-hidden position-relative">
    <responsive-menu v-if="windowWidth < 900" />
    <app-header />
    <v-main>
      <slot></slot>
    </v-main>
    <app-footer />
  </v-layout>
</template>

<script>
import { mapState } from "pinia";
import { width } from "@/store/windowWidth";
import AppFooter from "./AppFooter.vue";
import AppHeader from "./AppHeader.vue";
import ResponsiveMenu from "./ResponsiveMenu.vue";

export default {
  name: "AppLayout",
  components: { AppHeader, AppFooter, ResponsiveMenu },
  computed: {
    ...mapState(width, ["windowWidth"]),
  },
};
</script>

<style lang="scss" scoped></style>
