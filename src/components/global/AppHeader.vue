<template>
  <v-app-bar
    :absolute="true"
    flat
    class="px-2"
    height="fit-content"
    color="transparent"
    v-if="windowWidth >= 600"
  >
    <v-container>
      <v-row>
        <v-col cols="12" class="px-0">
          <div class="links d-flex justify-space-between">
            <div class="contact-links">
              <a
                href="mailto:example@gmail.com"
                class="text-decoration-none me-7"
                style="color: #999"
              >
                <v-icon color="#2662FA" class="me-1">mdi-email</v-icon>
                example@gmail.com
              </a>
              <a
                href="tel:+01012345678"
                class="text-decoration-none"
                style="color: #999"
              >
                <v-icon color="#2662FA" class="me-1">mdi-phone</v-icon>
                +01012345678
              </a>
            </div>
            <div class="social-links">
              <v-hover
                v-for="lin in socialLinks"
                :key="lin"
                v-slot="{ isHovering, props }"
              >
                <v-btn
                  v-bind="props"
                  variant="text"
                  :color="isHovering ? lin.color : '#555'"
                  :icon="lin.icon"
                  :href="lin.link"
                  style="transition: all 0.3s"
                  class="ms-3"
                  density="compact"
                ></v-btn>
              </v-hover>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <v-app-bar
    :absolute="state"
    flat
    class="px-2 my-0"
    :style="`top: ${!state ? '-4px' : windowWidth >= 600 ? '50px' : '0px'}`"
    height="fit-content"
    color="transparent"
  >
    <v-container>
      <v-row class="bg-white rounded-lg">
        <v-col cols="12">
          <div class="d-flex align-center">
            <div class="d-flex justify-start align-center flex-1-0">
              <img
                src="@/assets/images/logo.svg"
                height="48"
                class="flex-0-0 me-3"
                style="cursor: pointer"
                @click="$router.push({ name: 'home' })"
              />
              <v-btn-group
                density="compact"
                class="rounded-0"
                v-if="windowWidth >= 900"
              >
                <v-hover
                  v-for="(section, i) in sections"
                  :key="i"
                  v-slot="{ isHovering, props }"
                >
                  <v-btn
                    variant="plain"
                    v-bind="props"
                    size="large"
                    class="text-capitalize font-weight-medium rounded py-0 px-0 me-4"
                    :color="isHovering ? '#2662FA' : 'black'"
                    style="opacity: 1 !important"
                    @click="
                      !section.subSections
                        ? $router.push({ name: section.to })
                        : null
                    "
                  >
                    {{ section.title }}
                    <v-icon v-if="section.subSections">mdi-chevron-down</v-icon>
                    <v-menu
                      open-on-hover
                      open-on-click
                      v-if="section.subSections"
                      activator="parent"
                      transition="scroll-y-reverse-transition"
                      offset="18"
                    >
                      <v-list
                        class="rounded-b-xl"
                        style="border-bottom: 6px solid rgb(38, 98, 250)"
                        elevation="2"
                        variant="flat"
                        nav
                        density="comfortable"
                      >
                        <v-hover
                          v-for="sub in section.subSections"
                          :key="sub"
                          v-slot="{ isHovering, props }"
                        >
                          <v-list-item
                            @click="$router.push({ name: sub.to })"
                            width="200"
                            :value="sub.value"
                            v-bind="props"
                            :style="`background-color: ${
                              isHovering
                                ? 'rgb(38, 98, 250, .1)'
                                : 'transparent'
                            }; color: ${
                              isHovering ? 'rgb(38, 98, 250)' : 'black'
                            }
                            ; transition: all 0.3s`"
                            append-icon="mdi-chevron-right"
                          >
                            <v-list-item-title
                              style="font-size: 17px"
                              class="text-capitalize"
                              >{{ sub.title }}</v-list-item-title
                            >
                          </v-list-item>
                        </v-hover>
                      </v-list>
                    </v-menu>
                  </v-btn>
                </v-hover>
              </v-btn-group>
            </div>
            <v-btn
              v-if="windowWidth >= 900"
              color="#2662FA"
              variant="flat"
              class="text-capitalize text-white"
              size="large"
              ><span>let's talk</span>
              <v-icon class="ms-2">mdi-arrow-right</v-icon>
            </v-btn>
            <v-btn
              v-else
              color="#2662FA"
              variant="flat"
              class="text-capitalize text-white rounded-lg"
              rounded="0"
              icon
              @click="openMenu"
            >
              <v-icon size="large">mdi-menu</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  inject: ["Emitter"],
  data: () => ({
    state: true,
    sections: [
      {
        to: "home",
        title: "Home",
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
    socialLinks: [
      { icon: "mdi-facebook", link: "http://facebook.com", color: "#1877f2" },
      { icon: "mdi-twitter", link: "http://twitter.com", color: "#1da1f2" },
      { icon: "mdi-youtube", link: "http://youtube.com", color: "#ff0000" },
      { icon: "mdi-linkedin", link: "http://linkedin.com", color: "#0a66c2" },
    ],
    windowWidth: 0,
  }),
  methods: {
    calcScrolling() {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 135) {
          this.state = false;
        } else {
          this.state = true;
        }
        // console.log(window.scrollY);
      });
    },
    openMenu() {
      this.Emitter.emit("openMenu");
    },
  },
  mounted() {
    this.calcScrolling();
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>

<style lang="scss">
.v-responsive {
  max-width: fit-content;
}
.v-img__img {
  width: fit-content !important;
}
</style>
