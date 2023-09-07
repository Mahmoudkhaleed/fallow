<template>
  <div class="menu">
    <v-navigation-drawer v-model="openState" width="350" class="pa-5">
      <div class="d-flex justify-space-between align-center mb-5">
        <div class="text-h5 text-capitalize font-weight-bold">menu</div>
        <v-btn icon flat @click="openState = false"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </div>
      <v-list nav color="#2662FA" class="pa-0" mandatory density="comfortable">
        <v-list-item
          v-for="sec in secFilterd"
          :key="sec.title"
          :value="sec.title"
          class="text-capitalize mb-1"
          @click="$router.push({ name: sec.to })"
          >{{ sec.title }}</v-list-item
        >
        <v-list-group
          v-for="page in pages"
          :key="page.title"
          class="text-capitalize"
        >
          <template v-slot:activator="{ props }">
            <v-list-item :value="page.title" v-bind="props">
              More Sections</v-list-item
            >
          </template>
          <v-list-item
            v-for="sec in page.subSections"
            :key="sec.value"
            :value="sec.value"
            @click="$router.push({ name: sec.to })"
          >
            {{ sec.title }}
          </v-list-item>
        </v-list-group>
        <!-- <template v-slot="props"> </template> -->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "res-menu",
  data: () => ({
    openState: false,
    sections: [
      {
        to: "home",
        title: "Home",
        active: true,
      },
      {
        to: "about_me",
        title: "About me",
      },
      {
        to: "services",
        title: "Services",
      },
      {
        to: "pages",
        title: "Pages",
        subSections: [
          {
            to: "home",
            title: "Test",
            value: 0,
          },
          {
            to: "home",
            title: "Test",
            value: 1,
          },
          {
            to: "home",
            title: "Test",
            value: 2,
          },
          {
            to: "home",
            title: "Test",
            value: 3,
          },
          {
            to: "home",
            title: "Test",
            value: 4,
          },
        ],
      },
      {
        to: "contact_me",
        title: "Contact me",
      },
    ],
  }),
  computed: {
    secFilterd() {
      return this.sections.filter((sec) => sec.to != "pages");
    },
    pages() {
      return this.sections.filter((sec) => sec.to == "pages");
    },
  },
  inject: ["Emitter"],
  mounted() {
    this.Emitter.on("openMenu", () => (this.openState = true));
  },
};
</script>

<style lang="scss" scoped></style>
