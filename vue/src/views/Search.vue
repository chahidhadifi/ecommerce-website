<template>
  <section class="bg-white light:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-4 text-4xl tracking-tight font-bold text-gray-900 light:text-white"
        >
          Search
        </h2>
        <h5 class="mb-4 font-medium">Search term: "{{ query }}"</h5>
        <section
          class="grid md:grid-cols-2 lg:grid-cols-3 justify-items-between mt-8 gap-y-8 lg:gap-y-0 gap-x-8"
        >
          <div
            class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
            v-for="product in products"
            v-bind:key="product.id"
            v-bind:product="product"
          >
            <a class="relative flex h-60 overflow-hidden" href="#">
              <img
                class="absolute top-8 left-4"
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
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      products: [],
      query: "",
    };
  },
  mounted() {
    document.title = "Search";

    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);

    if (params.get("query")) {
      this.query = params.get("query");

      this.performSearch();
    }
  },
  methods: {
    async performSearch() {
      await axios
        .post("/api/v1/products/search/", { query: this.query })
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
