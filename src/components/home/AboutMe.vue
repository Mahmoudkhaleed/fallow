<template>
  <div
    class="about-me pt-16"
    :style="`padding-top: ${
      $route.name == 'about_me' ? '150px !important' : ''
    }; padding-bottom: ${$route.name == 'about_me' ? '50px !important' : ''}`"
  >
    <v-container class="py-0">
      <v-row>
        <v-col cols="12" md="6" class="position-relative py-0">
          <img
            :src="require('@/assets/images/Group-1-4.webp')"
            :style="`margin-left: ${
              windowWidth <= 959 ? '0; margin: 0 auto' : '-240px'
            }; display: block; width: ${windowWidth < 700 ? '100%' : '650px'}`"
          />
          <img src="@/assets/images/Frame-106.png" alt="frame" class="frame" />
        </v-col>
        <v-col cols="12" md="6">
          <h3
            class="text-h4 text-sm-h3 text-capitalize font-weight-bold mx-auto"
            style="line-height: 1.3; max-width: 600px"
          >
            my journey as a
            <div class="line-around">
              <img src="@/assets/images/Vector-6-1.png" alt="" />
              <span>product</span>
            </div>
            designer
          </h3>
          <p
            class="text-grey-darken-2 mt-8 mx-auto"
            :style="`font-size:${
              windowWidth < 600 ? '18px' : '20px'
            }; max-width: 600px;`"
          >
            Hello there! My name is Robert Elisc. I am a web designer &
            developer, and I'm very passionate and dedicated to my work. With 20
            years of experience as a professional graphic designer.
          </p>
          <div class="progresses mt-8 mx-auto" style="max-width: 600px">
            <div
              class="mb-4 position-relative"
              v-for="data in progressData"
              :key="data.value"
            >
              <p class="mb-1" style="font-size: 20px">{{ data.title }}</p>
              <v-progress-linear
                v-model="data.value"
                max="100"
                height="8"
                rounded
              ></v-progress-linear>
              <div
                class="presentage position-absolute text-right"
                :style="`top: 10px; left: 0; width: ${data.value}%; font-size: 16px`"
              >
                <span>{{ data.value }}%</span>
              </div>
            </div>
          </div>
          <div class="signature mt-10 mx-auto" style="max-width: 600px">
            <img
              src="@/assets/images/Signature.png"
              alt="Signature"
              height="80"
              class="d-block"
            />
            <p class="mt-4 text-grey-darken-4" style="font-size: 20px">
              CEO & Founder of QuomodoSoft
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { width } from "@/store/windowWidth";
import { mapState, mapActions } from "pinia";
export default {
  name: "AboutMe",
  data: () => ({
    progressData: [
      { title: "Figma", value: 88 },
      { title: "Adobe XD", value: 57 },
      { title: "Adobe Photoshop", value: 82 },
    ],
  }),
  computed: {
    ...mapState(width, ["windowWidth"]),
  },
  methods: {
    ...mapActions(width, ["getWidth"]),
  },
  mounted() {
    this.getWidth();
  },
};
</script>

<style lang="scss">
.about-me {
  background-image: url("@/assets/images/About-me.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  .frame {
    height: 60px;
    position: absolute;
    top: 30%;
    right: 100px;
    @media (max-width: 710px) {
      right: 50px;
      height: 50px;
    }
    @media (max-width: 460px) {
      right: 10px;
      height: 40px;
    }
  }
}
</style>
