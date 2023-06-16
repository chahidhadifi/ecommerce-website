<template>
  <div class="bg-gray-100 h-screen">
    <div
      class="bg-white p-6 md:mx-auto"
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto;
        height: 100vh;
      "
    >
      <div class="text-center mx-auto my-auto">
        <svg viewBox="0 0 24 24" class="text-green-600 h-20 mx-auto mb-5">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <h3 class="md:text-2xl text-base text-gray-900 font-bold text-center">
          Payment Done!
        </h3>
        <p class="text-gray-600 my-2 font-semibold">
          Thank you for completing your online payment.
        </p>
        <div class="py-10 text-center">
          <a
            href="/"
            class="px-12 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-3"
          >
            GO BACK
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>
