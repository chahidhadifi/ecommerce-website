<template>
  <p class="text-xl font-semibold text-center text-gray-500">
    Order #{{ order.id }}
  </p>
  <div
    class="mt-1 md:mt-1 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
    v-for="item in order.items"
    v-bind:key="item.product.id"
  >
    <div class="pb-4 md:pb-8 w-full md:w-40">
      <img class="w-full sm:block" :src="item.product.get_thumbnail" />
    </div>
    <div
      class="border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0"
    >
      <div class="w-full flex flex-col justify-start items-start space-y-8">
        <h3
          class="text-xl light:text-white xl:text-xl font-bold leading-6 text-gray-800"
        >
          {{ item.product.name }}
        </h3>
      </div>
      <div class="flex justify-between space-x-8 items-start w-full">
        <p class="text-base light:text-white xl:text-lg leading-6">
          {{ item.product.price }} DH
        </p>
        <p
          class="text-base light:text-white xl:text-lg leading-6 text-gray-800"
        >
          {{ item.quantity }}
        </p>
        <p
          class="text-base light:text-white xl:text-lg font-bold leading-6 text-gray-800"
        >
          {{ getItemTotal(item).toFixed(2) }} DH
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: {
    order: Object,
  },
  methods: {
    getItemTotal(item) {
      return item.quantity * item.product.price;
    },
    orderTotalLength(order) {
      return order.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
  },
};
</script>
