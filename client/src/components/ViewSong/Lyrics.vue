<template>
<panel title="Lyrics" >
  <v-layout width="100%">
    <v-flex class="textarea">
      <textarea
        readonly
        v-model="lyrics" ></textarea>
    </v-flex>
  </v-layout>
</panel>
</template>

<script>
export default {
  props: ['lyrics'],
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
}
.textarea {
  width: 100%;
}
</style>
