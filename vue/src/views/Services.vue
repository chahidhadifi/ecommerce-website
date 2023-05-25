<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="text-center mt-10 mb-20">
        <h2
          class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white"
        >
          Services
        </h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">
          We are committed to providing you with an exceptional online shopping
          experience.
        </p>
      </div>
      <div
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mb-20"
      >
        <div>
          <div
            class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-gray-900 lg:h-20 lg:w-20 m-auto"
          >
            <svg
              class="w-10 h-10 text-white lg:w-10 lg:h-10 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
              ></path>
            </svg>
          </div>
          <h3 class="mb-4 mt-4 text-2xl font-bold text-center">
            Secure Online Ordering
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-justify">
            Enjoy a hassle-free shopping experience with our secure online
            ordering system. Our robust platform ensures your personal and
            payment information is protected at all times, providing you with
            peace of mind while making your purchase.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-gray-900 lg:h-20 lg:w-20 m-auto"
          >
            <svg
              class="w-10 h-10 text-white lg:w-10 lg:h-10 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
              ></path>
            </svg>
          </div>
          <h3 class="mb-4 mt-4 text-2xl font-bold text-center">
            Product Catalog
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-justify">
            Explore a wide range of products carefully curated to cater to your
            needs. Our extensive catalog features an array of categories,
            ensuring you can find everything you're looking for in one
            convenient place.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-gray-900 lg:h-20 lg:w-20 m-auto"
          >
            <svg
              class="w-10 h-10 text-white lg:w-10 lg:h-10 dark:text-primary-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <h3 class="mb-4 mt-4 text-2xl font-bold text-center">
            Responsive Customer Support
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-justify">
            Our dedicated customer support is here to assist you every step of
            the way. Whether you have questions about a product, need assistance
            with an order, or require post-purchase support, our friendly and
            knowledgeable team is ready to help.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      //
    };
  },
  mounted() {
    document.title = "Services";
  },
};
</script>
