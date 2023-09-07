<template>
  <div class="home-page">
    <landing-page style="padding-top: 140px" class="pb-9" />
    <AboutMe />
    <ServicesView />
    <StatusSec />
    <ProjectsSec />
    <CustomerReview />
    <ContactMe />
    <MyBlogs />
    <HireMe />
  </div>
</template>

<script>
import AboutMe from "@/components/home/AboutMe.vue";
import ContactMe from "@/components/home/ContactMe.vue";
import CustomerReview from "@/components/home/CustomerReview.vue";
import HireMe from "@/components/home/HireMe.vue";
import LandingPage from "@/components/home/LandingPage.vue";
import MyBlogs from "@/components/home/MyBlogs.vue";
import ProjectsSec from "@/components/home/ProjectsSec.vue";
import ServicesView from "@/components/home/ServicesView.vue";
import StatusSec from "@/components/home/StatusSec.vue";

export default {
  name: "HomeView",
  components: {
    LandingPage,
    AboutMe,
    ServicesView,
    StatusSec,
    ProjectsSec,
    CustomerReview,
    ContactMe,
    MyBlogs,
    HireMe,
  },
};
</script>
