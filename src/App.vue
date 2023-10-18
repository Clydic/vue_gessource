<script setup>
import  HomeView  from './views/HomeView.vue'
const title = "Welcome on Gessource"
</script>
<template>
  <header>
    <h1>{{title}}</h1>

  </header>
    <HomeView/>
</template>

<style scoped>
h1{
  text-align: center;
}
header{
  background-color: beige;
}
</style>
