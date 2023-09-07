<template>
  <div
    class="contact-me pb-16 pt-16"
    :style="`padding-top: ${
      $route.name == 'contact_me' ? '150px !important' : ''
    }`"
  >
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="6">
          <h3
            class="text-h4 text-sm-h3 text-capitalize font-weight-bold mb-3"
            style="line-height: 1.3"
          >
            <span>let's </span>
            <div class="line-around">
              <img src="@/assets/images/Vector-6-1.png" alt="" />
              <span>connect</span>
            </div>
            <span> and collaborate</span>
          </h3>
          <ul class="links" v-for="n in 3" :key="n" style="list-style: none">
            <li
              style="border-bottom: 2px solid #000; font-size: 20px"
              class="py-4 pe-8 d-flex justify-space-between"
            >
              <div class="cont d-flex align-center">
                <span
                  class="d-flex justify-center align-center rounded-circle me-2 font-weight-medium"
                  style="
                    background-color: rgba(38, 98, 250, 0.1);
                    color: #1a43aa;
                    height: 35px;
                    width: 35px;
                  "
                  >{{ "0" + n }}</span
                >
                <span class="font-weight-medium">Lorem ipsum dolor sit.</span>
              </div>
              <v-icon>mdi-chevron-right</v-icon>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="6">
          <div class="form-cont">
            <v-card class="pa-8 bg-transparent" flat>
              <v-form>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      variant="outlined"
                      bg-color="white"
                      placeholder="First Name"
                      hide-details
                      color="grey-darken-1"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      variant="outlined"
                      bg-color="white"
                      placeholder="Last Name"
                      hide-details
                      color="grey-darken-1"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      variant="outlined"
                      bg-color="white"
                      placeholder="Email Adress"
                      hide-details
                      color="grey-darken-1"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      variant="outlined"
                      bg-color="white"
                      placeholder="Phone Number"
                      hide-details
                      color="grey-darken-1"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      variant="outlined"
                      bg-color="white"
                      placeholder="Subject"
                      hide-details
                      color="grey-darken-1"
                      density="comfortable"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      variant="outlined"
                      bg-color="white"
                      placeholder="Message"
                      hide-details
                      color="grey-darken-1"
                      density="comfortable"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      flat
                      color="rgba(38, 98, 250, 1)"
                      class="text-white text-capitalize"
                      size="large"
                      >Send Message</v-btn
                    >
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "contact-me",
};
</script>

<style lang="scss" scoped>
.form-cont {
  background-image: url("@/assets/images/BG-4.webp");
  background-size: cover;
}
</style>
