<template>
  <button
    type="button"
    v-if="showMessage"
    x-show="open"
    x-transition.duration.300ms
    class="fixed top-4 right-4 mt-12 mr-12 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
    style="margin-top: 70px"
  >
    <div class="flex items-center space-x-2">
      <span class="text-3xl"><i class="bx bx-check"></i></span>
      <p class="font-bold">Account created successfully!</p>
    </div>
  </button>
  <div class="bg-white w-screen font-sans text-gray-900">
    <div class=" ">
      <div
        class="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
      >
        <div class="mx-2 py-10 text-center md:mx-auto md:w-2/3 md:py-20">
          <h1 class="mb-1 text-3xl font-bold leading-4 sm:text-5xl xl:text-5xl">
            Sign up
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
        <div class="mb-4">
          <label class="mb-2 block text-sm font-bold" for="password2"
            >Repeat password</label
          ><input
            class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none focus:ring-gray-900 focus:border-gray-900"
            id="password2"
            type="password"
            v-model="password2"
            required=""
          />
        </div>
        <div class="flex items-center">
          <div class="flex-1"></div>
          <button
            class="cursor-pointer rounded bg-gray-900 hover:bg-gray-700 py-2 px-8 text-center text-lg font-bold text-white"
            type="submit"
          >
            Create account
          </button>
        </div>
        <div class="text-sm pt-5 font-medium text-gray-900 light:text-white">
          Already have an account?
          <router-link
            class="bg-white font-bold hover:underline text-gray-800"
            to="/log-in"
          >
            Log in
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      showMessage: false,
      username: "",
      password: "",
      password2: "",
      errors: [],
    };
  },
  mounted() {
    document.title = "Sign up";
  },
  methods: {
    displayMessage() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    },
    submitForm() {
      this.errors = [];

      if (this.username === "") {
        this.errors.push("The username is missing");
      }

      if (this.password === "") {
        this.errors.push("The password is too short");
      }

      if (this.password !== this.password2) {
        this.errors.push("The passwords doesn't match");
      }

      if (!this.errors.length) {
        const formData = {
          username: this.username,
          password: this.password,
        };

        axios
          .post("/api/v1/users/", formData)
          .then((response) => {
            this.displayMessage();
            this.$router.push("/log-in");
          })
          .catch((error) => {
            if (error.response) {
              for (const property in error.response.data) {
                this.errors.push(
                  `${property}: ${error.response.data[property]}`
                );
              }

              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              this.errors.push("Something went wrong. Please try again");

              console.log(JSON.stringify(error));
            }
          });
      }
    },
  },
};
</script>
