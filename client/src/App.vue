<template>
  <div id="app">
     <v-app>
       <page-header></page-header>
      <v-content class="mt-5">
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>

  </div>
</template>

<script>
import PageHeader from '@/components/Header';

export default {
  name: 'App',
  components: {
    PageHeader,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.danger-alert {
  color: red;
}


</style>
