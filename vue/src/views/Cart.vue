<template>
  <section class="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex pl-10">
        <h2
          class="mb-4 text-4xl tracking-tight font-bold text-gray-900 light:text-white"
        >
          Cart
        </h2>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          v-if="cartTotalLength"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">Product</th>
              <th scope="col" class="px-6 py-3">Qty</th>
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
        <h5
          v-else
          class="px-6 py-4 font-semibold text-gray-900 light:text-dark"
        >
          Vous n'avez aucun produit dans votre panier.
        </h5>
      </div>
      <div class="pl-10 py-10">
        <h2
          class="mb-4 text-4xl tracking-tight font-bold text-gray-900 light:text-white"
        >
          Summary
        </h2>
        <h5
          class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 light:text-white"
        >
          Total price:
          <span class="text-blue-700">{{ cartTotalPrice.toFixed(2) }} DH</span>
        </h5>
        <h5
          class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 light:text-white"
        >
          Number of items:
          <span class="text-blue-700">{{ cartTotalLength }} items</span>
        </h5>
        <router-link to="/cart/checkout">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

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
    this.cart = this.$store.state.cart;
  },
  methods: {
    removeFromCart(item) {
      this.cart.items = this.cart.items.filter(
        (i) => i.product.id !== item.product.id
      );
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
