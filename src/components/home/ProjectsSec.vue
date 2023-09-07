<template>
  <div
    class="projects-sec pb-16"
    :style="`padding-top: ${
      windowWidth < 905 && windowWidth >= 478
        ? '750px'
        : windowWidth < 478
        ? '1250px'
        : '380px'
    }`"
  >
    <v-container>
      <h3
        class="text-h4 text-sm-h3 text-capitalize font-weight-bold text-center"
        style="line-height: 1.3"
      >
        <span>showcasing my design </span>
        <div class="line-around">
          <img src="@/assets/images/Vector-6-1.png" alt="" />
          <span>projects</span>
        </div>
        <br />
        <span> and case studies</span>
      </h3>
      <v-row class="justify-center mt-6">
        <v-col cols="12" class="d-flex justify-center">
          <v-btn-toggle
            rounded="0"
            mandatory
            v-model="section"
            :class="`${
              windowWidth < 436 ? 'd-block overflow-visible h-auto' : null
            }`"
          >
            <v-hover
              v-for="(sec, i) in sections"
              :key="i"
              v-slot="{ isHovering, props }"
            >
              <v-btn
                :value="sec"
                v-bind="props"
                height="48px"
                size="large"
                :class="` me-3 ${
                  windowWidth < 436 ? 'd-inline-block me-0 w-100 mb-3' : null
                } rounded-lg text-capitalize text-${
                  isHovering ? 'white' : null
                }`"
                :style="`border: 1px solid; border-color: ${
                  isHovering ? '#2662FA' : null
                }; background-color: ${isHovering ? '#2662FA' : 'transparent'}`"
                variant="flat"
              >
                {{ sec }}
              </v-btn>
            </v-hover>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row class="mt-8">
        <transition-group
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @leave="onLeave"
          :duration="{ enter: 0, leave: 1000 }"
        >
          <v-col
            sm="6"
            md="4"
            cols="12"
            v-for="(project, i) in filterd"
            :key="project.id"
            :data-index="i"
            style="height: 400px"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                style="
                  background-size: cover;
                  background-position: center center;
                  height: 100%;
                "
                :style="`background-image: url(${project.image})`"
                class="mb-1 pa-0"
              >
                <v-fade-transition>
                  <v-card-text
                    v-if="isHovering"
                    style="
                      width: 100%;
                      height: 100%;
                      background-color: rgba(0, 0, 0, 0.5);
                    "
                    class="d-flex flex-column justify-center align-center"
                  >
                    <div
                      v-if="isHovering"
                      class="text-h4 font-weight-bold text-white text-capitalize mb-3"
                    >
                      {{ project.name }}
                    </div>
                    <p class="text-grey-lighten-3" style="font-size: 20px">
                      {{ project.category }}
                    </p>
                    <v-btn
                      class="mt-8 border-md border-opacity-50"
                      color="green"
                      variant="outlined"
                      size="large"
                      :href="project.link"
                      style="
                        background-color: rgba(0, 128, 0, 0.1);
                        border-color: green !important;
                      "
                      >View Project</v-btn
                    >
                  </v-card-text>
                </v-fade-transition>
              </v-card>
            </v-hover>
          </v-col>
        </transition-group>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// 416 775
import gsap from "gsap";
import { width } from "@/store/windowWidth";
import { mapState } from "pinia";
export default {
  data: () => ({
    section: "all",
    sections: ["all", "admin", "website", "app"],
    projects: [
      {
        id: 0,
        name: "mahmoud khaled",
        link: "https://www.google.com",
        category: "website",
        image:
          "https://img.freepik.com/premium-photo/3d-smartphones-with-differents-mobile-app-intarface-design-screen_58466-6741.jpg?w=740",
      },
      {
        id: 2,
        name: "khaled sonhi",
        link: "https://www.google.com",
        category: "app",
        image:
          "https://img.freepik.com/free-photo/marketing-creative-collage-with-phone_23-2149379900.jpg?w=740&t=st=1692916636~exp=1692917236~hmac=be38d54dabca491444cd1ec3fd74cb6c589686a094b1ffdec074ef7cffe7b013",
      },
      {
        id: 3,
        name: "alle template",
        link: "https://www.google.com",
        category: "website",
        image:
          "https://img.freepik.com/free-photo/schedule-event-planner-reminder-concept_53876-127820.jpg?w=740&t=st=1692917136~exp=1692917736~hmac=632f2953db1ef82f7994af6a2333ae07d9d06447b1ab8cdce96d4569fd64b874",
      },
      {
        id: 1,
        name: "lorem sdheb",
        link: "https://www.google.com",
        category: "admin",
        image:
          "https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg?w=740&t=st=1692917348~exp=1692917948~hmac=17c1cb3d9d1003fb3eeeaa5d7bcfb4336886571f4257b059ff621e3540d1c4b8",
      },
      {
        id: 4,
        name: "dashboard",
        link: "https://www.google.com",
        category: "admin",
        image:
          "https://img.freepik.com/premium-photo/technicians-with-laptop-top-database-isolated-white-background_1401-3059.jpg?w=360",
      },
      {
        id: 5,
        name: "bondi app",
        link: "https://www.google.com",
        category: "app",
        image:
          "https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg?w=740&t=st=1692916764~exp=1692917364~hmac=71a276e8203fd29ae9ba987cdabd3847d48b258fe84a01f23c8d5e574bc67c15",
      },
      {
        id: 6,
        name: "elzero web",
        link: "https://www.google.com",
        category: "website",
        image:
          "https://img.freepik.com/free-photo/top-view-adult-with-devices_23-2150162662.jpg?w=360&t=st=1692917193~exp=1692917793~hmac=7d72e57b0061ea7cc165983a560f97f2c5c9f43e439b910b0e1edee4be3aa816",
      },
      {
        id: 7,
        name: "jso serden irnc ",
        link: "https://www.google.com",
        category: "admin",
        image:
          "https://img.freepik.com/premium-photo/3d-illustration-computer-screen-display-with-minimalist-design-with-left-side-view_619023-170.jpg?w=740",
      },
    ],
  }),
  methods: {
    onBeforeEnter(el) {
      el.style.scale = 0.5;
    },
    onEnter(el, done) {
      gsap.to(el, {
        scale: 1,
        transition: ".4s",
        transitionDelay: el.dataset.index * 0.0001,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        scale: 0.5,
        transition: ".2s",
        onComplete: done,
      });
    },
  },
  computed: {
    filterd() {
      return this.projects.filter((project) =>
        this.section == "all" ? this.projects : project.category == this.section
      );
    },
    ...mapState(width, ["windowWidth"]),
  },
};
</script>

<style lang="scss">
.projects-sec {
  background-image: url("@/assets/images/Showcase-1.webp");
  background-position: top right;
  background-size: cover;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.scale {
  scale: 1;
}
.v-btn--active {
  background-color: #2662fa !important;
  color: #fff !important;
  border-color: #2662fa !important;
}
</style>
