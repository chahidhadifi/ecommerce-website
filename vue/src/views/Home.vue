<template>
  <div class="home">
    <!-- hero -->
    <div class="relative bg-gray-900">
      <div class="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          class="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
          ></path>
        </svg>
      </div>
      <div
        class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div
          class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center"
        >
          <h1
            class="mb-10 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-none"
          >
            We offer the convenience of online shopping.
          </h1>
          <p class="mb-6 text-base text-white md:text-lg text-justify">
            Welcome to our online marketplace, where shopping becomes an
            effortless and enjoyable experience. Our website brings together a
            vast selection of products from various categories, all in one
            convenient place. From electronics and fashion to home essentials
            and beyond, we have curated a diverse range of high-quality items to
            cater to your needs and preferences.
          </p>
          <a
            href="#start-shoping"
            aria-label="Scroll down"
            class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path
                d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
              ></path>
            </svg>
          </a>
        </div>
        <div id="start-shoping"></div>
      </div>
    </div>

    <!-- categories -->
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Shop by category
          </h2>

          <p class="max-w-md mx-auto mt-4 text-gray-500">
            We offer a wide range of categories, to ensure a great experience on
            our website.
          </p>
        </header>

        <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="my-3">
                <i class="bx bx-mobile-alt bx-lg"></i>
              </div>
              <div class="cursor-default">
                <h5
                  class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  Phone
                </h5>
              </div>
              <!-- <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p> -->
              <router-link
                to="/phone"
                class="inline-flex items-center text-gray-900 hover:underline"
              >
                Explore the category
                <svg
                  class="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                  ></path>
                  <path
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                  ></path>
                </svg>
              </router-link>
            </div>
          </li>

          <li>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="my-3">
                <i class="bx bx-tv bx-lg"></i>
              </div>
              <div class="cursor-default">
                <h5
                  class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  TV
                </h5>
              </div>
              <router-link
                to="/tv"
                class="inline-flex items-center text-gray-900 hover:underline"
              >
                Explore the category
                <svg
                  class="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                  ></path>
                  <path
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                  ></path>
                </svg>
              </router-link>
            </div>
          </li>

          <li>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="my-3">
                <i class="bx bx-laptop bx-lg"></i>
              </div>
              <div class="cursor-default">
                <h5
                  class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  Computer
                </h5>
              </div>
              <router-link
                to="/computer"
                class="inline-flex items-center text-gray-900 hover:underline"
              >
                Explore the category
                <svg
                  class="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                  ></path>
                  <path
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                  ></path>
                </svg>
              </router-link>
            </div>
          </li>

          <li>
            <div
              class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="my-3">
                <i class="bx bx-mouse-alt bx-lg"></i>
              </div>
              <div class="cursor-default">
                <h5
                  class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  Technology equipment
                </h5>
              </div>
              <router-link
                to="/technology-equipment"
                class="inline-flex items-center text-gray-900 hover:underline"
              >
                Explore the category
                <svg
                  class="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                  ></path>
                  <path
                    d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                  ></path>
                </svg>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- products -->
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Product collection
          </h2>

          <p class="max-w-md mx-auto mt-4 text-gray-500">
            We offer a wide range of electronic products, such as smartphones,
            tablets, laptops, televisions, and more to suit your needs.
          </p>
        </header>

        <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <li v-for="product in latestProducts" v-bind:key="product.id">
            <div
              class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
            >
              <a class="relative flex h-60 overflow-hidden" href="#">
                <img
                  class="absolute top-8 left-2"
                  :src="product.get_thumbnail"
                  alt="product image"
                />
              </a>
              <div class="mt-4 px-5 pb-5">
                <a href="#">
                  <h5
                    class="text-xl tracking-tight text-slate-900 whitespace-nowrap"
                  >
                    {{ product.name }}
                  </h5>
                </a>
                <div class="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span class="text-xl font-bold text-slate-900"
                      >{{ product.price }} DH</span
                    >
                  </p>
                </div>
                <router-link
                  class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  v-bind:to="product.get_absolute_url"
                >
                  <button
                    class="flex items-center justify-center bg-gray-900 px-2 py-1 text-sm text-white transition hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      />
                    </svg>
                    View details
                  </button>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      latestProducts: [],
    };
  },
  component: {
    //
  },
  mounted() {
    this.getLatestProducts();
    document.title = "Home";
  },
  methods: {
    async getLatestProducts() {
      await axios
        .get("/api/v1/latest-products/")
        .then((response) => {
          this.latestProducts = response.data;
          console.log(this.latestProducts.length);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
