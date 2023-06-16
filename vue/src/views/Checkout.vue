<!-- background: bg-gray-50 -->
<!-- font: text-gray-600 -->
<template>
  <div class="min-w-screen min-h-screen bg-white py-5 mt-10">
    <div class="px-5">
      <div class="text-center mb-9">
        <h2 class="text-4xl font-bold text-gray-900 sm:text-4xl">Checkout</h2>
      </div>
    </div>
    <div class="w-full bg-white px-5 py-10 text-gray-800">
      <div class="w-full">
        <div class="-mx-3 md:flex items-start">
          <div class="px-3 md:w-7/12 lg:pr-10">
            <div
              class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6"
            >
              <table
                class="w-full text-sm text-left text-gray-600 dark:text-gray-600"
              >
                <thead class="text-xs text-white bg-gray-900">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Image</span>
                    </th>
                    <th scope="col" class="px-6 py-3">Product</th>
                    <th scope="col" class="px-6 py-3">Quantity</th>
                    <th scope="col" class="px-6 py-3">Price</th>
                    <th scope="col" class="px-6 py-3">Total</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-bold">
                  <tr v-for="item in cart.items" v-bind:key="item.product.id">
                    <td class="w-32 p-4 left-2">
                      <img :src="item.product.get_thumbnail" alt="thumbnail" />
                    </td>
                    <td class="px-6 py-4 font-bold text-gray-900">
                      {{ item.product.name }}
                    </td>
                    <td class="px-6 py-4 font-bold text-gray-900">
                      {{ item.product.price }}
                    </td>
                    <td class="px-6 py-4 font-bold text-gray-900">
                      {{ item.quantity }}
                    </td>
                    <td class="px-6 py-4 font-bold text-gray-900">
                      {{ getItemTotal(item).toFixed(2) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl"
            >
              <div class="w-full flex items-center">
                <div class="flex-grow">
                  <span class="text-gray-600">Total</span>
                </div>
                <div class="pl-3">
                  <span class="font-bold text-2xl px-1">{{
                    cartTotalPrice
                  }}</span>
                  <span class="font-semibold text-gray-400 text-sm">DH</span>
                </div>
              </div>
            </div>
          </div>
          <div class="px-3 md:w-5/12">
            <div
              class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 mb-6"
            >
              <div class="w-full p-3 border-b border-gray-200">
                <div
                  class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                  role="alert"
                  v-if="errors.length"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 inline w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Info</span>
                  <div v-for="error in errors" v-bind:key="error">
                    {{ error }}
                  </div>
                </div>
                <div>
                  <div class="mb-3">
                    <label class="text-gray-600 font-bold text-sm mb-2 ml-1"
                      >First name</label
                    >
                    <div>
                      <input
                        class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-non focus:ring-gray-900 focus:border-gray-900 transition-colors"
                        v-model="first_name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="text-gray-600 font-bold text-sm mb-2 ml-1"
                      >Last name</label
                    >
                    <div>
                      <input
                        class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-900 transition-colors"
                        v-model="last_name"
                        type="text"
                      />
                    </div>
                    <div class="mb-3">
                      <label class="text-gray-600 font-bold text-sm mb-2 ml-1"
                        >Email</label
                      >
                      <div>
                        <input
                          class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-900 transition-colors"
                          v-model="email"
                          type="email"
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="text-gray-600 font-bold text-sm mb-2 ml-1"
                        >Phone</label
                      >
                      <div>
                        <input
                          class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-900 transition-colors"
                          v-model="phone"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="text-gray-600 font-bold text-sm mb-2 ml-1"
                        >Address</label
                      >
                      <div>
                        <input
                          class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-900 transition-colors"
                          v-model="address"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="text-gray-600 font-bold text-sm mb-2 ml-1"
                        >Post code</label
                      >
                      <div>
                        <input
                          class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-900 transition-colors"
                          v-model="zipcode"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="text-gray-600 font-bold text-sm mb-2 ml-1"
                        >Place</label
                      >
                      <div>
                        <input
                          class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-900 transition-colors"
                          v-model="place"
                          type="text"
                        />
                      </div>
                    </div>
                    <div
                      class="text-gray-600 font-bold text-sm mb-5 ml-1 mt-6"
                      id="card-element"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                class="block w-full max-w-xs mx-auto bg-gray-900 hover:bg-gray-700 focus:bg-gray-700 text-white rounded-lg px-3 py-2 font-semibold"
                @click="submitForm"
              >
                <i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
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
  name: "Checkout",
  data() {
    return {
      cart: {
        items: [],
      },
      stripe: {},
      card: {},
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      zipcode: "",
      place: "",
      errors: [],
    };
  },
  mounted() {
    document.title = "Checkout";

    this.cart = this.$store.state.cart;

    if (this.cartTotalLength > 0) {
      this.stripe = Stripe(
        "pk_test_51N9oiTBiU0dysdfIgjNZFlvXzGylZ7fNrTBPuKSKZPIKaF1yvwf2khjrrm3YLS3zIqAYnLybA9CU6xFbDf71QL0G00JZOPTR2P"
      );
      const elements = this.stripe.elements();
      this.card = elements.create("card", { hidePostalCode: true });

      this.card.mount("#card-element");
    }
  },
  methods: {
    getItemTotal(item) {
      return item.quantity * item.product.price;
    },
    submitForm() {
      this.errors = [];

      if (this.first_name === "") {
        this.errors.push("The first name field is missing!");
      }

      if (this.last_name === "") {
        this.errors.push("The last name field is missing!");
      }

      if (this.email === "") {
        this.errors.push("The email field is missing!");
      }

      if (this.phone === "") {
        this.errors.push("The phone field is missing!");
      }

      if (this.address === "") {
        this.errors.push("The address field is missing!");
      }

      if (this.zipcode === "") {
        this.errors.push("The zip code field is missing!");
      }

      if (this.place === "") {
        this.errors.push("The place field is missing!");
      }

      if (!this.errors.length) {
        this.stripe.createToken(this.card).then((result) => {
          if (result.error) {
            this.errors.push(
              "Something went wrong with Stripe. Please try again"
            );
            console.log(result.error.message);
          } else {
            this.stripeTokenHandler(result.token);
          }
        });
      }
    },
    async stripeTokenHandler(token) {
      const items = [];

      for (let i = 0; i < this.cart.items.length; i++) {
        const item = this.cart.items[i];
        const obj = {
          product: item.product.id,
          quantity: item.quantity,
          price: item.product.price * item.quantity,
        };

        items.push(obj);
      }

      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        address: this.address,
        zipcode: this.zipcode,
        place: this.place,
        phone: this.phone,
        items: items,
        stripe_token: token.id,
      };

      await axios
        .post("/api/v1/checkout/", data)
        .then((response) => {
          this.$store.commit("clearCart");
          this.$router.push("/cart/success");
        })
        .catch((error) => {
          this.errors.push("Something went wrong. Please try again");
          console.log(error);
        });
    },
  },
  computed: {
    cartTotalPrice() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.product.price * curVal.quantity);
      }, 0);
    },
    cartTotalLength() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");

.form-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-shrink: 0;
  border-radius: 100%;
  border-width: 2px;
}

.form-radio:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media not print {
  .form-radio::-ms-check {
    border-width: 1px;
    color: transparent;
    background: inherit;
    border-color: inherit;
    border-radius: inherit;
  }
}

.form-radio:focus {
  outline: none;
}

.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  background-repeat: no-repeat;
  padding-top: 0.5rem;
  padding-right: 2.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
}

.form-select::-ms-expand {
  color: #a0aec0;
  border: none;
}

@media not print {
  .form-select::-ms-expand {
    display: none;
  }
}

@media print and (-ms-high-contrast: active),
  print and (-ms-high-contrast: none) {
  .form-select {
    padding-right: 0.75rem;
  }
}
</style>
