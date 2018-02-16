<template>
    <v-layout column>
    <v-flex xs6 offset-xs3>
     <panel title="Join" >
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form action="tab-tracker-login"
            autocomplete="off">
           <v-text-field
              type="email"
              label="Email"
              id="email"
              v-model="email"
              placeholder="email" ></v-text-field>
            <br>
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
              autocomplete="new-password"
              placeholder="password" ></v-text-field>
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn
              class="deep-purple" dark
              @ click="register">Join</v-btn>
          </form>
        </div>
     </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  name: 'HelloWorld',
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$router.push({ name: 'login' });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
