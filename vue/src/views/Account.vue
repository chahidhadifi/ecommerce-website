<template>
  <section class="overflow-y-hidden mt-12 pt-10">
    <div
      class="px-4 md:px-6 2xl:px-20 2xl:mx-auto flex items-center h-screen flex-col"
    >
      <div class="text-center mb-9">
        <h2 class="text-4xl font-bold text-gray-900 sm:text-4xl">Account</h2>
      </div>
      <div
        class="mt-10 sm:w-4/5 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0"
      >
        <div
          class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8"
        >
          <div
            class="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
          >
            <p
              class="text-2xl md:text-3xl font-bold leading-6 xl:leading-5 text-gray-900 mb-4"
            >
              Customer orders
            </p>
            <!-- orders list -->
            <Order
              v-for="order in orders"
              v-bind:key="order.id"
              v-bind:order="order"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Order from "@/components/Order.vue";

export default {
  name: "Account",
  components: {
    Order,
  },
  data() {
    return {
      orders: [],
      user: {},
    };
  },
  mounted() {
    document.title = "Account";

    this.getMyOrders();
  },
  methods: {
    async getMyOrders() {
      await axios
        .get("/api/v1/orders/")
        .then((response) => {
          this.orders = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
