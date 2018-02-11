<template>
  <v-toolbar fixed class="deep-purple" dark>
    <v-toolbar-title class="mr-4" >
      <span class="home"
      @click="navigateTo({name: 'root'})">
      Tab Tracker
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark
        @click="navigateTo({name:'songs'})">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name:'login'})">Login!</v-btn>

      <v-btn flat dark
        v-if="$store.state.isUserLoggedIn"
        @click="logout({name:'logout'})">Logout</v-btn>

      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name:'register'})">Join!</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
      this.$router.push({ name: 'login' });
    },
  },
};
</script>
<style scoped>
.home{
  cursor: pointer;

}
.home:hover{
  color: rgb(250, 250, 206);

}
</style>
