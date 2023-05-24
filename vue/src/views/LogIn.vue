<template>
  <div class="bg-white w-screen font-sans text-gray-900">
    <div class=" ">
      <div
        class="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
      >
        <div class="mx-2 py-10 text-center md:mx-auto md:w-2/3 md:py-20">
          <h1
            class="mb-1 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl"
          >
            Log in
          </h1>
        </div>
      </div>
    </div>
    <div
      class="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <form
        class="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8"
        @submit.prevent="submitForm"
      >
        <!-- errors -->
        <div
          class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 light:bg-gray-800 dark:text-red-400"
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
        <div class="mb-4">
          <label class="mb-2 block text-sm font-bold" for="username"
            >Username</label
          ><input
            class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none focus:ring-gray-900 focus:border-gray-900"
            id="username"
            type="text"
            v-model="username"
            required=""
          /><span class="my-2 block"></span>
        </div>
        <div class="mb-4">
          <label class="mb-2 block text-sm font-bold" for="password"
            >Password</label
          ><input
            class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none focus:ring-gray-900 focus:border-gray-900"
            id="password"
            type="password"
            v-model="password"
            required=""
          />
        </div>
        <div class="flex items-center">
          <div class="flex-1"></div>
          <button
            class="cursor-pointer rounded bg-gray-900 hover:bg-gray-700 py-2 px-8 text-center text-lg font-bold text-white"
            type="submit"
          >
            Log in
          </button>
        </div>
        <div class="text-sm pt-5 font-medium text-gray-900 light:text-white">
          Don't have an account?
          <router-link
            class="bg-white font-bold hover:underline text-gray-800"
            to="/sign-up"
          >
            Sign up
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LogIn",
  data() {
    return {
      username: "",
      password: "",
      errors: [],
    };
  },
  mounted() {
    document.title = "Log In";
  },
  methods: {
    async submitForm() {
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");

      const formData = {
        username: this.username,
        password: this.password,
      };

      await axios
        .post("/api/v1/token/login/", formData)
        .then((response) => {
          const token = response.data.auth_token;

          this.$store.commit("setToken", token);

          axios.defaults.headers.common["Authorization"] = "Token " + token;

          localStorage.setItem("token", token);

          const toPath = this.$route.query.to || "/cart";

          this.$router.push(toPath);
        })
        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors.push("Something went wrong. Please try again");

            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>
