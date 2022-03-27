<template>
  <div class="md:flex md:items-center md:justify-between p-5 ">
    <div class="flex-1 min-w-0" @click="goTo('App')">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="">
    </div>
      <div v-if="user_data.role">
      
         <pre class="text-black">  My account </pre>
      </div>
    <div v-if="user_data.role" class="mt-4 flex md:mt-0 md:ml-4">
      <button
        @click="signOut()"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
      >
        Sign Out
      </button>
    </div>
    <div v-else class="mt-4 flex md:mt-0 md:ml-4">
      <button
        @click="goTo('signUp')"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
      >
        Sign up
      </button>
      <button
        @click="goTo('signIn')"
        type="button"
        class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md  text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-500"
        style="background: rgb(131,58,180);background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);"
      >
        Sign In
      </button>
    </div>
       
  </div>
</template>
<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState("user", ["user_data"]),
  },
  methods: {
    goTo(name){
      this.$router.push({name: name})
    },
    async signOut() {
      const { error } = await this.$supabase.auth.signOut();
      this.$router.push({name: "signIn"})
      if (error) {
        console.log(error);
      }
    }
  }
};
</script>
