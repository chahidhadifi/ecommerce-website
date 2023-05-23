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
              <a
                href="/telephone"
                class="inline-flex items-center text-gray-900 hover:underline"
                target="_blank"
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
              </a>
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
              <a
                href="/tv"
                class="inline-flex items-center text-gray-900 hover:underline"
                target="_blank"
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
              </a>
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
              <a
                href="/ordinateur"
                class="inline-flex items-center text-gray-900 hover:underline"
                target="_blank"
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
              </a>
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
              <a
                href="/materiel-informatique"
                class="inline-flex items-center text-gray-900 hover:underline"
                target="_blank"
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
              </a>
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
          </li>
        </ul>
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
