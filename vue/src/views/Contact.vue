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
      <p class="font-bold">Email sent successfully!</p>
    </div>
  </button>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white"
      >
        Contact Us
      </h2>
      <p
        class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
      >
        Got a technical issue? Want to send feedback about a beta feature? Need
        details about our Business plan? Let us know.
      </p>
      <form @submit.prevent="sendEmail" class="space-y-8">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Your email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Subject</label
          >
          <input
            type="text"
            id="subject"
            name="subject"
            v-model="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >Your message</label
          >
          <textarea
            id="message"
            name="message"
            v-model="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-900 focus:border-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-900 sm:w-fit hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = "d6ba8965-456a-427a-b0b5-6cbec94324a5";

export default {
  name: "Contact",
  data() {
    return {
      email: "",
      subject: "",
      message: "",
      showMessage: false,
    };
  },
  mounted() {
    document.title = "Contact";
  },
  methods: {
    async sendEmail() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          email: this.email,
          subject: this.subject,
          message: this.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        this.email = "";
        this.subject = "";
        this.message = "";
        this.displayMessage();
      }
    },
    displayMessage() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    },
  },
};
</script>
