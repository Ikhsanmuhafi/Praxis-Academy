<template>
  <div id="app">
    <img v-if="image" alt="Vue logo" src="./assets/logo.png">
    <!-- <img v-else alt="gambar 2" src="a.png">
    <HelloWorld msg="Lah Ko Pusing"/>
      <h1> ini state ke: {{number}} || pertama</h1>
      <h1>Nama: {{people.nama}}</h1>
      <h1>alamat:{{alamat}}</h1>
      <p>Umur: {{people.umur}}</p>
      <p>Tinggal: {{people.tinggal}} </p>
      <p>{{numberIcr}} </p>
      <p>Hidup cuma sekali</p>
          <button @click="changeNama">ganti nama</button>
          <button @click="resetNama">reset nama</button>
    <button @click="displayAlert">display</button>
        <h1 v-for="h in ya " :key="h">{{h}}</h1> -->
        <Lifecycle/>
  </div>
</template>

 <script>
  import Lifecycle from '@/components/Lifecycle';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Lifecycle,
    // HelloWorld
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
      return this.people.nama;
    },
    numberIcr(){
      return 'pusying aing';
    },
    numberIcr2(){
      return 'sirahku mumet';
    },
    numberIcr3(){
      return'sirahmu pie?'
    }
  },
  methods: {
    changeNama(){
      this.people.nama = "muhafi";
    },

    resetNama(){
      this.people.nama = "ikhsan";
    },
    displayAlert(){
      alert(this.numberIcr2);
      alert(this.numberIcr3);
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

.btnKu {
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
}
</style>

