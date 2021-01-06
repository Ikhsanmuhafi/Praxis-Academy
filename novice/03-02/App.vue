<template>
  <div id="app">
    <img v-if="image" alt="Vue logo" src="./assets/logo.png">
    <img v-else alt="gambar 2" src="a.png">
    <HelloWorld msg="Lah Ko Pusing"/>
      <h1> ini state ke: {{number}} || pertama</h1>
      <h1>Nama: {{people.nama}}</h1>
      <p>Umur: {{people.umur}}</p>
      <p>Tinggal: {{people.tinggal}} </p>
      <p>{{numberIcr}} </p>
      <p>Hidup cuma sekali</p>
          <button @click="changeNama">ganti nama</button>
    <button @click="displayAlert">display</button>
        <h1 v-for="h in ya " :key="h">{{h}}</h1>
  <button><a href="youtube.com">kuy youtube</a></button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => {
    return{
      number: 1,
      alamat: "jl.tali 1 no.10",
      people:{
        nama: 'ikhsan',
        umur:18,
        tinggal: 'jauh pake helm '
      },
       ya: ['-_-', '*_*', '@_@'],
       image: true
    }
  },
  computed:{
    getNama(){
      return this.people.nama.toUpperCase();
    },
    numberIcr(){
      return 'sirahku memut';
    },
    numberIcr2(){
      return 'sirahmu pie?';
    }
  },
  methods: {
    changeNama(){
      this.people.nama = "muhafi";
    },
    displayAlert(){
      alert(this.numberIcr2);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
