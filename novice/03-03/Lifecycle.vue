<template>
  <div style='border: 1px solid red;'>
    <!-- <h1>HALO SEMUA</h1>
    <h1 v-if="life === 'life cycle'">{{life}}</h1>
    <input v-model="life" type="text"/>
    <button @click="life = 'halo halo aja'">Update</button> -->
    <button @click="getData">klick</button>
   <p>{{latihan.tittle}}</p>
   <p>{{latihan.body}}</p>
  </div>
</template>
  
<script>
import axios from 'axios'
export default {
  data: () => {
    return {
      life: "life cycle",
      latihan: ""
    };
  },
  // beforeCreate() {
  //   alert(this.life + " before created");
  // },
  // created() {
  //   alert(this.life + " created");
  // },
  // beforeMount() {
  //   alert(this.life + " before mounted");
  // },
  // mounted() {
  //   alert(this.life + " mounted");
  // },
  // beforeUpdate() {
  //   alert(this.life + " before updated");
  // },
  // updated() {
  //   alert(this.life + " updated");
  // },
  // beforeDestroy() {
  //   alert(this.life + " before destroyed");
  // },
  // destroyed() {
  //   alert(this.life + " destroyed");
  // },
  methods: {
    getData(){
      axios.get("https://jsonplaceholder.typicode.com/posts/2")
      .then(data =>{
        this.latihan = data.data
      })
      .catch(error =>{
        console.log(error);
      })
    }
  }
};
</script>

<style>
</style>