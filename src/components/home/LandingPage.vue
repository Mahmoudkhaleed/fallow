<template>
  <div class="landing h-100">
    <v-container class="h-100">
      <v-row class="h-100 align-center">
        <v-col cols="12" md="6" class="text-center text-md-start">
          <h2 class="text-h4 text-sm-h3 text-md-h2 mb-3 font-weight-bold">
            Hey, I'm
            <span
              class="wave"
              style="
                animation: wave-animation 2.5s infinite;
                transform-origin: 70% 70%;
              "
            ></span>
          </h2>
          <h2
            class="text-h4 text-sm-h3 text-md-h2 mb-3 font-weight-bold text-capitalize"
          >
            richard lord
          </h2>
          <h2
            class="text-h4 text-sm-h3 text-md-h2 font-weight-bold text-capitalize mx-auto mx-md-0"
            style="width: fit-content"
          >
            <div class="green-underline">
              <img src="@/assets/images/Vector-2999.png" alt="" /><span
                style="white-space: nowrap"
                >product designer</span
              >
            </div>
          </h2>
          <p
            class="text-grey mt-8 mx-auto mx-md-0"
            :style="`font-size:${
              windowWidth < 600 ? '18px' : '23px'
            }; max-width: 600px`"
          >
            Agency worked with top rated talent people provide quality services.
          </p>
          <div
            class="d-block d-sm-flex align-center mt-8 position-relative justify-center justify-md-start"
          >
            <v-btn
              color="#2662FA"
              variant="flat"
              size="large"
              class="text-capitalize text-white me-5 px-3 mb-5 mb-sm-0"
              height="50"
              ><span>hire me</span>
              <v-icon class="ms-2">mdi-arrow-right</v-icon>
            </v-btn>
            <v-btn
              variant="text"
              size="large"
              class="text-capitalize mb-5 mb-sm-0"
              style="height: fit-content"
              color="white"
              :ripple="false"
            >
              <v-icon
                class="me-2 rounded-circle"
                color="#2662FA"
                size="x-large"
                style="
                  border: 1px solid rgb(38, 98, 250, 0.3);
                  height: 50px;
                  width: 50px;
                "
                >mdi-play</v-icon
              >
              <span style="color: black">watch video</span>
            </v-btn>
            <img
              src="@/assets/images/Vector-806.png"
              class="arrow"
              alt="arrow"
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          order="first"
          order-md="last"
          class="position-relative text-center"
        >
          <div
            class="position-relative mx-auto mx-md-0"
            style="width: fit-content"
          >
            <img
              :src="require('@/assets/images/Hero-Image-1.webp')"
              cover
              :style="`width: ${windowWidth < 700 ? '100%' : '650px'}`"
            />
            <img src="@/assets/images/Button.png" alt="Button" class="five" />
            <img
              src="@/assets/images/Card-3.png"
              alt="Card"
              class="customers"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data: () => ({
    windowWidth: 0,
  }),
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped>
.landing {
  background-image: url("@/assets/images/Hero-3.webp");
  background-size: cover;
  background-repeat: no-repeat;
  .arrow {
    position: absolute;
    right: calc(100% + 30px);
    top: 10%;
    animation: floats2 1.5s ease-in-out infinite both;
  }
  .five,
  .customers {
    position: absolute;
  }
  .five {
    top: 60%;
    left: 80px;
    z-index: 3;
    display: block;
    @media (max-width: 550px) {
      width: 120px;
      left: 30px;
    }
    @media (max-width: 450px) {
      width: 100px;
      left: 10px;
    }
    @media (max-width: 400px) {
      width: 100px;
      top: 10%;
      left: 10px;
    }
  }
  .customers {
    bottom: 20px;
    @media (min-width: 960px) {
      right: 0;
    }
    @media (max-width: 959px) {
      right: 0;
    }
    @media (max-width: 550px) {
      width: 180px;
    }
    @media (max-width: 450px) {
      width: 140px;
    }
    @media (max-width: 400px) {
      width: 120px;
    }
    z-index: 3;
    display: block;
    animation: floats 2s ease-in-out infinite both;
  }
}
</style>
