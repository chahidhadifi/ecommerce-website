<template>
  <section class="bg-white light:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="mb-4 text-4xl tracking-tight font-bold text-gray-900 light:text-white"
        >
          Your account
        </h1>
      </div>
      <button
        type="button"
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 light:bg-red-600 light:hover:bg-red-700 light:focus:ring-red-900"
        @click="logout()"
      >
        Log out
      </button>
    </div>
  </section>
  <section class="overflow-y-hidden light:bg-gray-900">
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div class="flex justify-start item-start space-y-2 flex-col">
        <h1
          class="text-3xl light:text-white lg:text-4xl font-extrabold leading-7 lg:leading-9 text-gray-600"
        >
          Account
        </h1>
      </div>
      <div
        class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0"
      >
        <div
          class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8"
        >
          <div
            class="flex flex-col justify-start items-start light:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full"
          >
            <p
              class="text-lg md:text-xl light:text-white font-extrabold leading-6 xl:leading-5 text-gray-600 mb-4"
            >
              Customer Cart
            </p>
            <!-- orders list -->
            <Order
              v-for="order in orders"
              v-bind:key="order.id"
              v-bind:order="order"
            />
            <!-- end orders list -->
          </div>
        </div>
        <div
          class="bg-gray-50 light:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col"
        >
          <h3
            class="text-xl light:text-white font-semibold leading-5 text-gray-800"
          >
            Customer
          </h3>
          <div
            class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0"
          >
            <div class="flex flex-col justify-start items-start flex-shrink-0">
              <div
                class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200"
              >
                <img
                  src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                  alt="avatar"
                />
                <div class="flex justify-start items-start flex-col space-y-2">
                  <p
                    class="text-base light:text-white font-semibold leading-4 text-left text-gray-800"
                  >
                    David Kent
                  </p>
                  <p
                    class="text-sm light:text-gray-300 leading-5 text-gray-600"
                  >
                    10 Previous Orders
                  </p>
                </div>
              </div>

              <div
                class="flex justify-center text-gray-800 light:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full"
              >
                <img
                  class="light:hidden"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                  alt="email"
                />
                <img
                  class="hidden light:block"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1light.svg"
                  alt="email"
                />
                <p class="cursor-pointer text-sm leading-5">
                  david89@gmail.com
                </p>
              </div>
            </div>
            <div
              class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0"
            >
              <div
                class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start"
              >
                <div
                  class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8"
                >
                  <p
                    class="text-base light:text-white font-semibold leading-4 text-center md:text-left text-gray-800"
                  >
                    Shipping Address
                  </p>
                  <p
                    class="w-48 lg:w-full light:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
                  >
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
                <div
                  class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4"
                >
                  <p
                    class="text-base light:text-white font-semibold leading-4 text-center md:text-left text-gray-800"
                  >
                    Billing Address
                  </p>
                  <p
                    class="w-48 lg:w-full light:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"
                  >
                    180 North King Street, Northhampton MA 1060
                  </p>
                </div>
              </div>
              <div
                class="flex w-full justify-center items-center md:justify-start md:items-start"
              >
                <button
                  class="mt-6 md:mt-0 light:border-white light:hover:bg-gray-900 light:bg-transparent light:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800"
                >
                  Edit Details
                </button>
              </div>
            </div>
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
    };
  },
  mounted() {
    document.title = "Account";

    this.getMyOrders();
  },
  methods: {
    logout() {
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("userid");

      this.$store.commit("removeToken");

      this.$router.push("/");
    },
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
