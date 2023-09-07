<template>
  <div class="hire-me py-10">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <h3
            class="text-h4 text-sm-h3 text-white text-capitalize font-weight-bold"
            style="max-width: 450px; line-height: 1.2"
          >
            hire me as a product design great skills elite.
          </h3>
        </v-col>
        <v-col cols="12" md="6">
          <p
            class="text-grey-lighten-2"
            style="line-height: 1.6; max-width: 600px; font-size: 20px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            perferendis sequi accusamus earum.
          </p>
          <v-btn
            color="#2662FA"
            flat
            size="large"
            class="text-white text-capitalize mt-8"
            >Download CV <v-icon>mdi-download</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "hire-me",
};
</script>

<style lang="scss" scoped>
.hire-me {
  background-image: url("@/assets/images/Group-1000007251-2.webp");
  background-size: cover;
  background-position: center center;
  @media (max-width: 541px) {
    background-position: 37% center;
  }
}
</style>
