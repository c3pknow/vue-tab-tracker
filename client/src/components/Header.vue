<template>
  <v-toolbar fixed class="deep-purple" dark>
    <v-toolbar-title class="mr-4" >
      <router-link
       class="home"
       tag="span"
      :to="{name: 'root'}">
      Tab Tracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark
        :to="{name:'songs'}">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{name:'login'}">Login!</v-btn>

      <v-btn flat dark
        v-if="$store.state.isUserLoggedIn"
        :to="{name:'logout'}">Logout</v-btn>

      <v-btn flat dark
        v-if="!$store.state.isUserLoggedIn"
        :to="{name:'register'}">Join!</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
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
