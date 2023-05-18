<template>
  <section class="container p-12">
    <!-- qsdf -->
    <div
      class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
    >
      <a class="relative flex h-60 overflow-hidden" href="#">
        <img
          class="absolute top-0 right-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
          alt="product image"
        />
        <div
          class="absolute bottom-0 mb-4 flex w-full justify-center space-x-4"
        >
          <div
            class="h-3 w-3 rounded-full border-2 border-white bg-white"
          ></div>
          <div
            class="h-3 w-3 rounded-full border-2 border-white bg-transparent"
          ></div>
          <div
            class="h-3 w-3 rounded-full border-2 border-white bg-transparent"
          ></div>
        </div>
      </a>
      <div class="mt-4 px-5 pb-5">
        <a href="#">
          <h5 class="text-xl tracking-tight text-slate-900">
            Lululemon Comfort Tee - White
          </h5>
        </a>
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold text-slate-900">$79</span>
          </p>
        </div>
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
          Add to cart
        </button>
      </div>
    </div>
    <!-- qsdf -->
    <div
      class="2xl:mx-auto 2xl:container px-4 md:px-6 2xl:px-0 py-16 flex justify-center"
    >
      <div class="fle flex-col justify-center items-center">
        <div class="flex justify-start items-start">
          <p class="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800">
            {{ category.name }}
          </p>
        </div>
        <!-- cards -->
        <div
          class="grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-8 gap-y-8 lg:gap-y-0 gap-x-8"
        >
          <div
            class="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md"
            v-for="product in category.products"
            v-bind:key="product.id"
          >
            <a class="relative flex h-60 overflow-hidden" href="#">
              <img class="" :src="product.get_thumbnail" alt="product image" />
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
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Category",
  data() {
    return {
      category: {
        products: [],
      },
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      const categorySlug = this.$route.params.category_slug;
      axios
        .get(`/api/v1/products/${categorySlug}/`)
        .then((response) => {
          this.category = response.data;

          document.title = this.category.name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
