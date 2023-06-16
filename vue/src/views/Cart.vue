<template>
  <section class="bg-white py-12 sm:py-16 lg:py-20">
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col"
    >
      <div class="text-center mb-9">
        <h2 class="text-4xl font-bold text-gray-900 sm:text-4xl">Cart</h2>
      </div>
      <div
        class="relative w-full overflow-x-auto shadow-md lg:w-3/5"
        v-if="cartTotalLength"
      >
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead class="text-xs text-white bg-gray-900 font-extrabold">
            <tr>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">Product</th>
              <th scope="col" class="px-6 py-3">Quantity</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <CartItem
              v-for="item in cart.items"
              v-bind:key="item.product.id"
              v-bind:initialItem="item"
              v-on:removeFromCart="removeFromCart"
            />
          </tbody>
        </table>
      </div>
      <div v-else class="text-center mt-16">
        <p class="text-xl font-semibold text-gray-900 mb-10 sm:text-2xl">
          You have no products in your cart.
        </p>
        <router-link rel="noopener noreferrer" to="/">
          <button
            class="cursor-pointer rounded bg-gray-900 hover:bg-gray-700 py-3 px-10 text-center text-base font-bold text-white"
            type="submit"
          >
            Back to homepage
          </button></router-link
        >
      </div>

      <div class="py-10 mt-8 text-center" v-if="cartTotalLength">
        <h2 class="mb-9 text-4xl font-bold text-gray-900 light:text-white">
          Summary
        </h2>
        <h5 class="mb-5 text-lg tracking-tight font-bold text-gray-900">
          Total price:
          <span class="relative inline-block px-2 ml-3">
            <div
              class="absolute inset-0 transform -skew-x-12 bg-gray-900"
            ></div>
            <span class="relative text-white text-2xl"
              >{{ cartTotalPrice.toFixed(2) }} DH</span
            >
          </span>
        </h5>
        <h5 class="mb-4 text-lg tracking-tight font-bold text-gray-900">
          Number of items:
          <span class="relative inline-block px-2 ml-3">
            <div
              class="absolute inset-0 transform -skew-x-12 bg-gray-900"
            ></div>
            <span class="relative text-white text-2xl"
              >{{ cartTotalLength }}
              <span v-if="cartTotalLength == 1">item</span>
              <span v-else>items</span></span
            >
          </span>
        </h5>

        <button
          type="button"
          class="text-white text-base text-lg mt-5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-8 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="checkout()"
        >
          Proceed to checkout
          <svg
            aria-hidden="true"
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
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import store from "@/store";

import CartItem from "@/components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  data() {
    return {
      cart: {
        items: [],
      },
    };
  },
  mounted() {
    document.title = "Cart";
    this.cart = this.$store.state.cart;
  },
  methods: {
    removeFromCart(item) {
      this.cart.items = this.cart.items.filter(
        (i) => i.product.id !== item.product.id
      );
    },
    checkout() {
      if (store.state.isAuthenticated) {
        this.$router.push("cart/checkout");
      } else {
        this.$router.push("log-in");
      }
    },
  },
  computed: {
    cartTotalLength() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
    cartTotalPrice() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.product.price * curVal.quantity);
      }, 0);
    },
  },
};
</script>
