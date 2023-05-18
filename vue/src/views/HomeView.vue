<template>
  <div class="home">
    <!-- hero -->
    <section class="bg-white dark:bg-gray-900">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Payments tool for software companies
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
    <!-- products -->
    <!-- bg-white light:bg-gray-900 -->
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div
          class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400"
        >
          <!-- title -->
          <h2
            class="mb-2 text-4xl tracking-tight font-bold text-gray-900 light:text-dark"
          >
            Powering innovation at
            <span class="font-extrabold">200,000+</span> companies worldwide
          </h2>
          <!-- search -->
          <div>
            <div class="mx-auto mt-1 w-screen max-w-screen-md py-2 leading-6">
              <form
                class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg"
                method="get"
                action="/search"
              >
                <svg
                  class="absolute left-2 block h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8" class=""></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                </svg>
                <input
                  type="name"
                  name="query"
                  class="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
                />
                <button
                  type="submit"
                  class="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <!-- categories -->
          <div class="mb-5">
            <span
              class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded light:bg-blue-900 light:text-blue-300"
              >All</span
            >
            <router-link to="/tv">
              <span
                class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded light:bg-blue-900 light:text-blue-300"
                >Tv</span
              >
            </router-link>

            <span
              class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded light:bg-blue-900 light:text-blue-300"
              >Téléphone</span
            >
          </div>
          <!-- cards -->
          <section class="text-gray-600 body-font">
            <div class="container mx-auto">
              <div
                class="grid md:grid-cols-2 lg:grid-cols-3 justify-items-between mt-8 gap-y-8 lg:gap-y-0 gap-x-8"
              >
                <!-- oneCard -->
                <div
                  class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
                  v-for="product in latestProducts"
                  v-bind:key="product.id"
                >
                  <a class="relative flex h-60 overflow-hidden" href="#">
                    <img
                      class="absolute top-8 left-9"
                      :src="product.get_thumbnail"
                      alt="product image"
                    />
                  </a>
                  <div class="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl tracking-tight text-slate-900">
                        {{ product.name }}
                      </h5>
                    </a>
                    <div class="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span class="text-xl font-bold text-slate-900"
                          >DH {{ product.price }}</span
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
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
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
