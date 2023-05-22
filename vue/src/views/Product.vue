<template>
  <button
    type="button"
    v-if="showMessage"
    x-show="open"
    x-transition.duration.300ms
    class="fixed top-4 right-4 mt-12 mr-12 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
  >
    <div class="flex items-center space-x-2">
      <span class="text-3xl"><i class="bx bx-check"></i></span>
      <p class="font-bold">Item Created Successfully!</p>
    </div>
  </button>
  <div
    class="min-w-screen min-h-screen bg-gray-900 flex items-center p-5 lg:p-10 overflow-hidden relative"
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
            <h1 class="font-bold uppercase text-2xl mb-5">
              {{ product.name }}
            </h1>
            <p class="text-sm">
              {{ product.description }}
            </p>
          </div>
          <div>
            <div class="flex items-center gap-1">
              <input
                type="number"
                v-model="quantity"
                min="1"
                class="h-10 w-24 rounded border-gray-200 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <div class="inline-block align-bottom">
              <span class="text-2xl leading-none align-baseline">MAD </span>
              <span class="font-bold text-5xl leading-none align-baseline">{{
                product.price
              }}</span>
            </div>
            <br />
            <div class="inline-block align-bottom mt-3">
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
