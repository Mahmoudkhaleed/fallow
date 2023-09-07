<template>
  <v-footer
    :app="true"
    absolute
    class="bg-transparent app-footer flex-column align-stretch"
  >
    <v-container>
      <v-row class="py-6 py-lg-16">
        <v-col cols="12" sm="6" lg="4" class="px-0">
          <img
            src="@/assets/images/footer-logo.svg"
            height="48"
            class="flex-0-0 me-3"
            style="cursor: pointer"
            @click="$router.push({ name: 'home' })"
          />
          <p class="text-grey-lighten-2 mt-3" style="font-size: 20px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet
            exercitationem reiciendis hic eaque error.
          </p>
          <div class="links d-flex mt-4">
            <v-hover
              v-for="socialLink in socialLinks"
              :key="socialLink.icon"
              v-slot="{ isHovering, props }"
            >
              <v-btn
                v-bind="props"
                icon
                :color="isHovering ? socialLink.color : 'rgba(255,255,255, .1)'"
                style="transition: 0.3s"
                class="me-3"
                ><v-icon
                  :color="isHovering ? '#fff' : 'rgba(255,255,255, .6)'"
                  style="transition: 0.3s"
                  >{{ socialLink.icon }}</v-icon
                ></v-btn
              >
            </v-hover>
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="2" class="px-0">
          <h3 class="text-h5 text-white font-weight-bold mb-4">Links</h3>
          <ul style="list-style: none">
            <v-hover
              v-for="li in links"
              :key="li.title"
              v-slot="{ isHovering, props }"
            >
              <li class="mb-3">
                <router-link
                  v-bind="props"
                  class="text-grey-lighten-2 d-block text-capitalize"
                  :style="`font-size: 20px; width: fit-content !important; text-decoration: ${
                    isHovering ? 'underline' : 'none'
                  }`"
                  :to="{ name: li.to }"
                  >{{ li.title }}</router-link
                >
              </li>
            </v-hover>
          </ul>
        </v-col>
        <v-col cols="12" sm="6" lg="2" class="px-0">
          <h3 class="text-h5 text-white font-weight-bold mb-4">Services</h3>
          <ul style="list-style: none">
            <v-hover
              v-for="li in services"
              :key="li.title"
              v-slot="{ isHovering, props }"
            >
              <li class="mb-3">
                <router-link
                  v-bind="props"
                  class="text-grey-lighten-2 d-block text-capitalize"
                  :style="`font-size: 20px; width: fit-content !important; text-decoration: ${
                    isHovering ? 'underline' : 'none'
                  }`"
                  :to="{ name: li.to }"
                  >{{ li.title }}</router-link
                >
              </li>
            </v-hover>
          </ul></v-col
        >
        <v-col cols="12" sm="6" lg="4" class="px-0">
          <h3 class="text-h5 text-white font-weight-bold mb-4">
            Official info
          </h3>
          <div class="info">
            <div class="d-flex align-center mb-2">
              <v-icon color="#2662FA" class="me-2">mdi-map-marker</v-icon>
              <span
                style="font-size: 20px"
                class="text-capitalize text-grey-lighten-2"
                >30 commercial road</span
              >
            </div>
            <div class="d-flex align-center mb-5">
              <v-icon color="#2662FA" class="me-2">mdi-phone</v-icon>
              <a
                style="font-size: 20px"
                class="text-grey-lighten-2 text-decoration-none"
                href="tel:+88 0123456782"
                >+88 0123456782
              </a>
            </div>
            <h3 class="text-capitalize text-grey-lighten-2 mb-5">
              subscribe newsletter
            </h3>
            <div class="d-flex" style="height: 49px">
              <v-text-field
                variant="solo"
                hide-details
                placeholder="Email Address"
                density="comfortable"
                flat
                bg-color="rgba(38, 98, 250, 0.1)"
              ></v-text-field>
              <v-btn
                color="rgba(38, 98, 250, 1)"
                class="text-capitalize text-white rounded-0 rounded-e-lg"
                style="font-size: 17px"
                height="100%"
                >Subscribe</v-btn
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <p
      class="text-grey-lighten-2 text-capitalize text-center py-4 px-3 border-t-md"
      style="border-color: rgba(255, 255, 255, 0.2) !important"
    >
      Copyright &copy; {{ new Date().getFullYear() }} - all rights reserved.
      made by Mahmoud.
    </p>
  </v-footer>
</template>

<script>
export default {
  name: "app-footer",
  data: () => ({
    socialLinks: [
      { icon: "mdi-facebook", color: "#1877f2" },
      { icon: "mdi-twitter", color: "#1da1f2" },
      { icon: "mdi-instagram", color: "#833ab4" },
      { icon: "mdi-linkedin", color: "#0a66c2" },
    ],
    links: [
      { title: "Home", to: "home" },
      { title: "About me", to: "about_me" },
      { title: "services", to: "services" },
      { title: "pages", to: "home" },
      { title: "contact me", to: "home" },
    ],
    services: [
      { title: "web design", to: "home" },
      { title: "brand strategy", to: "home" },
      { title: "product design", to: "home" },
      { title: "web development", to: "home" },
      { title: "app development", to: "home" },
    ],
  }),
};
</script>

<style lang="scss">
.app-footer {
  background-image: url("@/assets/images/Footer-Content-Area-1.png") !important;
  background-size: cover !important;
  background-position: center center !important;
  .v-field__input {
    color: white;
    caret-color: rgba(38, 98, 250, 1);
    &::placeholder {
      color: #eee;
    }
  }
  .v-field {
    border-radius: 6px 0 0 6px !important;
  }
}
</style>
