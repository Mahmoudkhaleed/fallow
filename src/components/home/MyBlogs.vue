<template>
  <div class="my-blogs py-16">
    <v-container class="bg-transparent overflow-auto">
      <div class="header mb-10">
        <h3
          class="text-h4 text-sm-h3 text-capitalize font-weight-bold text-center"
          style="line-height: 1.3"
        >
          <span>share my thoughts and </span>
          <div class="line-around">
            <img src="@/assets/images/Vector-6-1.png" alt="" />
            <span>ideas</span>
          </div>
          <br />
          <span> though blog posts</span>
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '960': {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          '1280': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }"
        style="user-select: none"
      >
        <swiper-slide v-for="n in 10" :key="n">
          <v-card class="pa-5" flat>
            <v-img
              cover
              class="rounded"
              width="100%"
              src="https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?w=826&t=st=1693107162~exp=1693107762~hmac=64da36e7be27130f21ab493e091b8c22af08df428a173884e7b7f7aff2aac934"
            ></v-img>
            <div class="mt-8 mb-3">
              <v-chip size="large" class="me-4" rounded="lg">Digital</v-chip>
              <v-chip size="large" rounded="lg">Marketing</v-chip>
            </div>
            <h3
              class="text-h6 text-sm-h5 font-weight-bold text-capitalize"
              style="max-width: 400px"
            >
              introduction new apps designs for our IOS app
            </h3>
            <v-btn
              class="mt-4 text-capitalize pa-0"
              variant="plain"
              size="x-large"
              style="opacity: 1 !important"
            >
              <div
                class="cont"
                :style="`border-bottom: 2px solid #888 ; padding-bottom: 3px; transition: all 0.3s; color: #888`"
              >
                Read more
                <v-icon color="#888">mdi-arrow-right</v-icon>
              </div>
            </v-btn>
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
};
</script>

<style lang="scss" scoped>
.my-blogs {
  background-image: url("@/assets/images/Bolg.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
