<template>
  <v-app>
    <v-main>
      <v-btn v-on:click="log" block color="primary" elevation="2">CLICK ME</v-btn>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  methods: {
    log: function() {console.log('hello world!')}},

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
