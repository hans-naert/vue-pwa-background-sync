<template>
  <v-app>
    <v-main>
      <v-btn v-on:click="fetchData" block color="primary" elevation="2">POST</v-btn>
      <v-card>{{json}}</v-card>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  
  methods: {
    fetchData: function() {
      console.log('hello world!')
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then( json => { 
        console.log(json)
        this.json = JSON.stringify(json)})
      }},

  components: {
    
  },

  data: () => ({
    json: "Hello Vue!"
    //
  }),
};
</script>
