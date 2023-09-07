<template>
  <div
    class="services py-16"
    :style="`padding-top: ${
      $route.name == 'services' ? '150px !important' : ''
    }`"
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h3
            class="text-h4 text-sm-h3 text-capitalize font-weight-bold mx-auto"
            style="line-height: 1.3; max-width: 600px"
          >
            exploring my
            <div class="line-around">
              <img src="@/assets/images/Vector-6-1.png" alt="" />
              <span>design</span>
            </div>
            expertise
          </h3>
        </v-col>
        <v-col cols="12" md="6">
          <p
            class="text-grey-darken-2 mx-auto"
            style="font-size: 20px; max-width: 600px"
          >
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </p>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col
          cols="12"
          sm="6"
          md="6"
          lg="4"
          v-for="(sevice, i) in services"
          :key="i"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              elevation="4"
              :color="isHovering ? '#2662FA' : 'white'"
              class="pa-10 rounded-lg"
            >
              <div
                :class="`icon d-flex justify-center align-center rounded-circle ${
                  !isHovering ? 'not-hovered' : ''
                }`"
                style="
                  background-color: rgb(255, 255, 255, 0.2);
                  height: 100px;
                  width: 100px;
                "
                :style="`background-color: ${
                  isHovering
                    ? 'rgb(255, 255, 255, 0.2)'
                    : 'rgb(38, 98, 250, .1)'
                }; color: ${
                  isHovering ? 'rgb(38, 98, 250)' : 'black'
                }; transition: all 0.3s`"
                v-html="sevice.svg"
              ></div>
              <v-card-title
                :class="`text-capitalize text-wrap pa-0 font-weight-bold text-${
                  isHovering ? 'white' : 'black'
                } mt-6`"
                :style="`font-size: ${
                  windowWidth < 1280 ? '18px' : '24px'
                }; transition: all 0.3s`"
                v-html="sevice.title"
              >
              </v-card-title>
              <v-card-text
                :class="`text-capitalize font-weight-regular pa-0 text-${
                  isHovering ? 'white' : 'black'
                }  mt-4`"
                :style="`font-size: ${
                  windowWidth < 1280 ? '16px' : '18px'
                }; line-height: 1.6`"
              >
                <span style="transition: all 0.3s">{{ sevice.text }}</span>
                <v-btn
                  class="mt-4 text-capitalize pa-0 d-block"
                  variant="plain"
                  size="x-large"
                  :ripple="false"
                  style="opacity: 1 !important"
                >
                  <div
                    class="cont"
                    :style="`border-bottom: 2px solid ${
                      isHovering ? 'white' : 'black'
                    } ; padding-bottom: 3px; transition: all 0.3s`"
                  >
                    learn more
                    <v-icon>mdi-arrow-right</v-icon>
                  </div>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { width } from "@/store/windowWidth";
import { mapState } from "pinia";
export default {
  name: "ServicesView",
  data: () => ({
    services: [
      {
        svg: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="transparent"
                >
                  <path
                    d="M50.7949 56.2424H12.2161C9.49188 56.2424 7.20703 54.0454 7.20703 51.2333V5.27272C7.20703 3.33939 8.78885 1.75757 10.7222 1.75757H47.1919C49.1252 1.75757 50.707 3.33939 50.707 5.27272V56.2424H50.7949Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.20703 51.2333C7.20703 53.9576 9.404 56.2424 12.2161 56.2424H50.707V46.2242H12.2161C9.49188 46.2242 7.20703 48.5091 7.20703 51.2333Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.8398 51.2341H40.1611"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.4102 24.3417L35.9435 7.99629C37.4374 6.23872 40.0738 6.06296 41.7435 7.73266C43.3253 9.31447 43.2374 11.7751 41.7435 13.269C41.6556 13.3569 24.8708 27.2417 24.8708 27.2417"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.7293 31.1087C21.796 32.6905 15.1172 33.745 15.1172 33.745C15.1172 33.745 17.6657 30.5814 18.1051 26.539C18.3687 24.4299 21.6202 23.0238 23.7293 25.1329C25.399 26.8026 25.5748 29.6147 23.7293 31.1087Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M40.6029 27.5054L36.3848 31.8114L42.6242 33.7448L40.6029 27.5054Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M28.6504 24.0774L36.3837 31.8107L40.6019 27.5047L33.5716 20.4744"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29.1778 16.1684L19.5112 6.5896C17.3142 7.29263 15.996 8.69869 15.293 10.8078L25.3112 20.7381"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.1476 9.13843L17.9294 13.3566L16.4355 14.8505C15.7324 15.5536 15.7324 16.6081 16.4355 17.3112L19.5991 20.4748"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.3242 37.4353H35.9454"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3809 41.3903H42.8869"
                    stroke="white"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
              </svg>`,
        title: `brand strategy & art direction`,
        text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        link: "http://google.com/",
      },
      {
        svg: `<svg
        xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="transparent">
          <g clip-path="url(#clip0_1_14828)"><path d="M53.5613 4.88276C51.5972 2.91869 48.3713 3.06301 46.5905 5.19462L38.5469 14.8224L43.6218 19.8973L53.2496 11.8536C55.3809 10.0727 55.5252 6.84671 53.5613 4.88276Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M57.1515 21.3477V46.9823C57.1515 51.136 53.7846 54.5041 49.6309 54.5041H42.6758C46.8295 54.5041 50.1964 51.136 50.1964 46.9823V21.3477H57.1515Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.0598 17.3598C11.3095 17.3598 12.3227 16.3467 12.3227 15.0969C12.3227 13.8471 11.3095 12.834 10.0598 12.834C8.81001 12.834 7.79688 13.8471 7.79688 15.0969C7.79688 16.3467 8.81001 17.3598 10.0598 17.3598Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.052 17.3598C19.3017 17.3598 20.3149 16.3467 20.3149 15.0969C20.3149 13.8471 19.3017 12.834 18.052 12.834C16.8022 12.834 15.7891 13.8471 15.7891 15.0969C15.7891 16.3467 16.8022 17.3598 18.052 17.3598Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M26.0442 17.3598C27.2939 17.3598 28.3071 16.3467 28.3071 15.0969C28.3071 13.8471 27.2939 12.834 26.0442 12.834C24.7944 12.834 23.7812 13.8471 23.7812 15.0969C23.7812 16.3467 24.7944 17.3598 26.0442 17.3598Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.547 14.8223L43.5002 8.89365C43.229 8.86408 42.9539 8.84766 42.6747 8.84766H8.37137C4.21769 8.84766 0.849609 12.2146 0.849609 16.3694V21.3474H29.2728C31.0918 19.1368 31.5654 16.2453 38.547 14.8223Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M43.6229 19.8964C43.5223 20.4003 43.3941 20.8834 43.2422 21.3466H50.1964V16.3686C50.1964 15.7535 50.1209 15.1562 49.9816 14.584L43.6229 19.8964Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M54.3544 10.5176C54.0802 11.0121 53.7118 11.4664 53.2495 11.8526L49.9805 14.5838C50.1197 15.1561 50.1952 15.7533 50.1952 16.3684V21.3465H57.1503V16.3684C57.1503 14.0044 56.0593 11.8964 54.3544 10.5176Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M43.241 21.3477C41.2519 27.413 35.055 29.9169 29.538 26.8586C27.7016 25.8405 27.3455 23.3383 28.8237 21.847C28.9839 21.6853 29.1323 21.5185 29.2728 21.3477H0.849609V46.9823C0.849609 51.136 4.21769 54.5041 8.37137 54.5041H42.6747C46.8284 54.5041 50.1954 51.136 50.1954 46.9823V21.3477H43.241Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.5475 14.8224C31.0265 16.3553 31.0585 19.5925 28.8243 21.8467C27.3462 23.3381 27.7021 25.8402 29.5385 26.8583C35.4768 30.1503 42.2039 26.9988 43.6223 19.8973L38.5475 14.8224Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.2668 32.2168H10.7042C9.09859 32.2168 7.79688 33.5185 7.79688 35.1242V43.6868C7.79688 45.2924 9.09859 46.5941 10.7042 46.5941H19.2668C20.8725 46.5941 22.1742 45.2924 22.1742 43.6868V35.1242C22.1742 33.5185 20.8725 32.2168 19.2668 32.2168Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M41.2974 32.6719H29.0196C27.7359 32.6719 26.6953 33.7125 26.6953 34.9962C26.6953 36.2799 27.7359 37.3205 29.0196 37.3205H41.2975C42.5812 37.3205 43.6218 36.2799 43.6218 34.9962C43.6218 33.7125 42.5811 32.6719 41.2974 32.6719Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M41.2974 41.4904H29.0196C27.7359 41.4904 26.6953 42.531 26.6953 43.8147C26.6953 45.0984 27.7359 46.139 29.0196 46.139H41.2975C42.5812 46.139 43.6218 45.0984 43.6218 43.8147C43.6218 42.5311 42.5811 41.4904 41.2974 41.4904Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1_14828"><rect width="58" height="58" fill="white"/></clipPath></defs>
          </svg>`,
        title: "website/ app design UX/ UI design",
        text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        link: "http://google.com/",
      },
      {
        svg: `<svg  class="nostroke"
        xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="transparent">
          <g clip-path="url(#clip0_1_34)"><path d="M28.4755 49.0273C28.2648 48.8166 27.9725 48.6953 27.6746 48.6953C27.3766 48.6953 27.0844 48.8165 26.8737 49.0273C26.663 49.2379 26.5417 49.5302 26.5417 49.8281C26.5417 50.1273 26.663 50.4183 26.8737 50.629C27.0844 50.8409 27.3766 50.9609 27.6746 50.9609C27.9725 50.9609 28.2648 50.8409 28.4755 50.629C28.6862 50.4183 28.8074 50.1262 28.8074 49.8281C28.8074 49.5302 28.686 49.2379 28.4755 49.0273Z" fill="white"/><path d="M33.869 38.5776V30.2421C33.869 29.8658 33.6821 29.5139 33.3702 29.3034C33.0583 29.0928 32.6622 29.0508 32.313 29.1913L12.7932 37.0527H6.50607C2.91869 37.0527 0 39.9714 0 43.559C0 47.1466 2.91869 50.0653 6.5063 50.0653H7.25497V56.868C7.25497 57.4936 7.76213 58.0008 8.38778 58.0008H13.0124C13.638 58.0008 14.1452 57.4936 14.1452 56.868V50.6117L32.3135 57.919C32.4498 57.9739 32.5933 58.0009 32.7361 58.0009C32.959 58.0009 33.1804 57.9351 33.3704 57.8068C33.6822 57.5962 33.869 57.2443 33.869 56.8681V48.5328C36.1407 48.0159 37.842 45.9812 37.842 43.5552C37.842 41.1293 36.1407 39.0945 33.869 38.5776ZM11.8794 55.7352H9.52059V50.0652H11.8796V55.7352H11.8794ZM11.8797 47.7995H6.5063C4.16795 47.7995 2.26562 45.8972 2.26562 43.559C2.26562 41.2206 4.16795 39.3183 6.5063 39.3183H11.8801L11.8797 47.7995ZM31.6035 55.1914H31.6034L14.1457 48.1699V38.9504L26.5417 33.9581V45.2001C26.5417 45.8256 27.0489 46.3329 27.6746 46.3329C28.3002 46.3329 28.8074 45.8256 28.8074 45.2001V33.0456L31.6035 31.9195V55.1914ZM33.869 46.1589V40.9514C34.8728 41.3898 35.5764 42.3916 35.5764 43.5551C35.5764 44.7186 34.8729 45.7205 33.869 46.1589Z" fill="white"/><path d="M48.6489 42.4549H42.2351C41.6095 42.4549 41.1023 42.9622 41.1023 43.5877C41.1023 44.2132 41.6095 44.7205 42.2351 44.7205H48.6489C49.2745 44.7205 49.7817 44.2132 49.7817 43.5877C49.7817 42.9622 49.2745 42.4549 48.6489 42.4549Z" fill="white"/><path d="M43.3889 34.154C42.9465 33.7117 42.2292 33.7117 41.7868 34.154L39.5744 36.3664C39.132 36.8087 39.132 37.526 39.5744 37.9685C39.7957 38.1896 40.0856 38.3003 40.3755 38.3003C40.6654 38.3003 40.9554 38.1896 41.1765 37.9685L43.3889 35.7561C43.8313 35.3138 43.8313 34.5965 43.3889 34.154Z" fill="white"/><path d="M43.4721 51.3136L41.1857 49.0271C40.7433 48.5849 40.026 48.5849 39.5836 49.0271C39.1412 49.4695 39.1412 50.1868 39.5836 50.6293L41.87 52.9157C42.0913 53.1368 42.3812 53.2475 42.671 53.2475C42.9609 53.2475 43.2509 53.1368 43.4721 52.9157C43.9144 52.4734 43.9144 51.7561 43.4721 51.3136Z" fill="white"/><path d="M53.4688 0H32.3985C29.9 0 27.8672 2.03272 27.8672 4.53124V4.98437H8.83603C7.33687 4.98437 6.11729 6.20406 6.11729 7.70311V25.6015C6.11729 27.1006 7.33687 28.3203 8.83603 28.3203H10.0066V31.7942C10.0066 32.2525 10.2826 32.6655 10.7058 32.8409C10.846 32.8989 10.9931 32.9271 11.1391 32.9271C11.4339 32.9271 11.7237 32.812 11.9404 32.5953L16.2154 28.3203H38.7173C40.2165 28.3203 41.436 27.1006 41.436 25.6015V22.2031H53.4688C55.9673 22.2031 58 20.1704 58 17.6718V4.53124C57.9999 2.03272 55.9673 0 53.4688 0ZM39.1704 25.6015C39.1704 25.8514 38.9672 26.0546 38.7173 26.0546H15.7462C15.4458 26.0546 15.1576 26.174 14.9452 26.3864L12.2723 29.0594V27.1874C12.2723 26.5619 11.7651 26.0546 11.1395 26.0546H8.83603C8.58613 26.0546 8.38291 25.8514 8.38291 25.6015V7.70311C8.38291 7.45321 8.58613 7.24999 8.83603 7.24999H27.8672V17.6718C27.8672 20.1704 29.9 22.2031 32.3985 22.2031H39.1704V25.6015ZM55.7344 17.6718C55.7344 18.9211 54.718 19.9375 53.4688 19.9375H32.3985C31.1492 19.9375 30.1329 18.9211 30.1329 17.6718V4.53124C30.1329 3.28198 31.1492 2.26562 32.3985 2.26562H53.4688C54.718 2.26562 55.7344 3.28198 55.7344 4.53124V17.6718Z" fill="white"/><path d="M47.4846 10.1202L39.7317 5.64401C39.3812 5.44158 38.9494 5.44158 38.5989 5.64401C38.2484 5.84633 38.0325 6.22039 38.0325 6.62503V15.5773C38.0325 15.9819 38.2484 16.356 38.5989 16.5583C38.7741 16.6596 38.9696 16.7101 39.1653 16.7101C39.3609 16.7101 39.5564 16.6596 39.7317 16.5583L47.4846 12.0821C47.8351 11.8798 48.051 11.5057 48.051 11.1011C48.051 10.6965 47.8352 10.3225 47.4846 10.1202ZM40.2981 13.6153V8.58717L44.6526 11.1012L40.2981 13.6153Z" fill="white"/><path d="M24.3001 11.8945H12.972C12.3464 11.8945 11.8392 12.4018 11.8392 13.0273C11.8392 13.6529 12.3464 14.1601 12.972 14.1601H24.3001C24.9258 14.1601 25.4329 13.6529 25.4329 13.0273C25.4329 12.4018 24.9258 11.8945 24.3001 11.8945Z" fill="white"/><path d="M25.1009 18.5702C24.8902 18.3593 24.598 18.2383 24.3 18.2383C24.0021 18.2383 23.7098 18.3593 23.4991 18.5702C23.2884 18.7809 23.1672 19.0731 23.1672 19.3711C23.1672 19.669 23.2884 19.9613 23.4991 20.1718C23.7098 20.3825 24.0021 20.5039 24.3 20.5039C24.5991 20.5039 24.8902 20.3827 25.1009 20.1718C25.3116 19.9613 25.4328 19.669 25.4328 19.3711C25.4328 19.0731 25.3116 18.7809 25.1009 18.5702Z" fill="white"/><path d="M20.0509 18.2383H12.972C12.3464 18.2383 11.8392 18.7455 11.8392 19.3711C11.8392 19.9966 12.3464 20.5039 12.972 20.5039H20.0509C20.6765 20.5039 21.1837 19.9966 21.1837 19.3711C21.1837 18.7455 20.6765 18.2383 20.0509 18.2383Z" fill="white"/></g><defs><clipPath id="clip0_1_34"><rect width="58" height="58" fill="white"/></clipPath></defs>
          </svg>`,
        title: "marketing & content creation",
        text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        link: "http://google.com/",
      },
    ],
  }),
  computed: {
    ...mapState(width, ["windowWidth"]),
  },
};
</script>

<style lang="scss">
.not-hovered {
  svg {
    path {
      transition: all 0.3s;
      stroke: rgb(38, 98, 250);
    }
    &.nostroke {
      path {
        stroke: none;
        fill: rgb(38, 98, 250);
      }
    }
  }
}
</style>
