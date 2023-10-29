<script setup>
  import H2Component from '../components/H2Component.vue'
  import RessourceDataService from '../service/RessourceDataService';
  //import ListGame from '../mock/listgame-mock'
  var errors=[];

  const title = "Charger une partie"
  const subtitle = "Liste des parties"

</script>

<template>
  <div class="d-flex flex-column m-auto">
    <h-2-component :title="title"/>
    <h3 class="m-auto">{{subtitle}}</h3>
  <ul class="m-auto">
    <li v-for="game_name in list_game" key="game_name" class="m-5">
      <router-link :to="{ name: 'game', params: {name : game_name }}">{{game_name}}</router-link>
      
    </li>
  </ul>
  </div>
</template>


<script>
//test
import axios from 'axios';
export default {
data(){
  return{
    list_game : [] 
  }

},
created(){
axios.get(`http://localhost:4000/games`)
    .then(response => {
      // JSON responses are automatically parsed.
      let data = response.data;
      let liste=[];
      for(var game in data){
        liste.push(data[game].name)
      }
    this.list_game = liste;
    })
    .catch(e => {
      errors.push(e)
    })

}
}
</script>

<style scoped lang=scss>

</style>
