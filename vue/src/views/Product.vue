<template>
  <button
    type="button"
    v-if="showMessage"
    x-show="open"
    x-transition.duration.300ms
    class="cursor-default fixed top-4 right-4 mt-12 mr-12 z-50 rounded-md bg-gray-900 px-4 py-2 text-white transition"
  >
    <div class="flex items-center space-x-2">
      <span class="text-3xl"><i class="bx bx-check"></i></span>
      <p class="font-bold">Item Created Successfully!</p>
    </div>
  </button>
  <div
    class="min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-10 overflow-hidden relative"
  >
    <div
      class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left"
    >
      <div class="md:flex items-center -mx-10">
        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
          <div class="relative">
            <img
              v-bind:src="product.get_image"
              class="w-full relative z-10"
              alt=""
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 px-10">
          <div class="mb-3">
            <h1 class="font-bold uppercase text-3xl mb-5">
              {{ product.name }}
            </h1>
            <p class="text-sm text-gray-500">
              {{ product.description }}
            </p>
          </div>
          <!-- <div>
            <div class="flex items-center gap-1">
              <input
                type="number"
                v-model="quantity"
                min="1"
                class="h-10 w-24 rounded border-gray-200 sm:text-sm"
              />
            </div>
          </div> -->
          <div class="flex flex-row my-5">
            <button
              class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
              @click="
                if (quantity > 1) {
                  --quantity;
                }
              "
            >
              <span class="sr-only">Quantity button</span>
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div>
              <input
                type="number"
                id="third_product"
                class="bg-gray-50 mx-2 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="1"
                min="1"
                v-model="quantity"
                required
                readonly
              />
            </div>
            <button
              class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
              @click="++quantity"
            >
              <span class="sr-only">Quantity button</span>
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <!-- sdf -->
          <div class="flex flex-col">
            <div class="inline-block align-bottom mb-2">
              <span class="font-bold text-5xl leading-none align-baseline">{{
                product.price
              }}</span>
              <span class="text-2xl leading-none align-baseline"> DH</span>
            </div>
            <div class="inline-block align-bottom mt-3">
              <button
                class="cursor-pointer rounded bg-gray-900 hover:bg-gray-700 py-2 px-8 text-center text-lg font-bold text-white"
                @click="addToCart"
              >
                <i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Product",
  data() {
    return {
      product: {},
      quantity: 1,
      showMessage: false,
    };
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      const category_slug = this.$route.params.category_slug;
      const product_slug = this.$route.params.product_slug;

      await axios
        .get(`/api/v1/products/${category_slug}/${product_slug}`)
        .then((response) => {
          this.product = response.data;

          document.title = this.product.name;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    displayMessage() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    },
    addToCart() {
      if (isNaN(this.quantity) || this.quantity < 1) {
        this.quantity = 1;
      }

      const item = {
        product: this.product,
        quantity: this.quantity,
      };

      this.$store.commit("addToCart", item);
      this.displayMessage();
    },
  },
};
</script>
