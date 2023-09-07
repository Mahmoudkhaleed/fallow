<template>
  <div class="customer-review py-16">
    <v-container class="bg-transparent overflow-auto">
      <div class="header mb-10">
        <p class="text-center text-uppercase mb-2" style="color: #2662fa">
          customer reviews
        </p>
        <h3
          class="text-h4 text-sm-h3 text-capitalize font-weight-bold text-center"
          style="line-height: 1.3"
        >
          what clients and colleagues <br />
          say about my work
        </h3>
      </div>
      <swiper
        :slides-per-view="1"
        :modules="modules"
        :pagination="{ el: '.pagination', clickable: true }"
        :space-between="30"
        :autoplay="{ delay: 4000 }"
        :loop="true"
        :breakpoints="{
          '600': {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          '1280': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }"
        style="user-select: none"
      >
        <swiper-slide v-for="n in 10" :key="n">
          <v-card class="pa-6 pa-sm-10 pe-sm-16" flat>
            <v-rating
              color="orange"
              class="mb-2 d-block"
              :model-value="5"
              readonly
              density="compact"
            ></v-rating>
            <q style="font-size: 20px" class="text-grey-darken-2 font-italic"
              >{{ n }}Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Tempora nisi, commodi magnam architecto, quidem placeat.</q
            >
            <div class="d-flex align-center justify-space-between mt-5">
              <div class="d-flex align-center">
                <div
                  class="image rounded-circle me-3 overflow-hidden"
                  style="height: 80px; width: 80px"
                >
                  <img
                    style="height: 100%"
                    src="@/assets/images/download.png"
                    alt="person"
                  />
                </div>
                <div class="name">
                  <h3
                    class="text-capitalize text-h5 txet-sm-h4 font-weight-bold mb-2"
                  >
                    John Doe
                  </h3>
                  <p
                    class="text-grey-darken-2"
                    :style="`font-size: ${windowWidth < 600 ? '16px' : '20px'}`"
                  >
                    Web Desinger
                  </p>
                </div>
              </div>
              <img
                :style="`height: ${windowWidth < 600 ? '100px' : '130px'}; ${
                  windowWidth < 484 ? 'display: none; ' : 'display: block'
                }`"
                src="@/assets/images/Quotemarks-left-2.png"
                alt=""
              />
            </div>
          </v-card>
        </swiper-slide>
        <div class="pagination text-center mt-5"></div>
      </swiper>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { width } from "@/store/windowWidth";
import { mapState } from "pinia";

export default {
  name: "Customer-review",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  computed: {
    ...mapState(width, ["windowWidth"]),
  },
};
</script>

<style lang="scss" scoped>
.customer-review {
  background-image: url("@/assets/images/Hero-3.webp");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
