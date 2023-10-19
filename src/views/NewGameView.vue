<script setup>
import H2Component from '../components/H2Component.vue'
const title = "Nouvelle Partie"
var game_name = ""
function affichage(){
  console.log(game_name);
}
</script>

<template>
<div class="d-flex flex-column ">
  <h-2-component :title="title"/>
<input v-model="game_name" class="col-4 m-auto"/>
<div class="d-flex m-auto">
  <router-link to="/loadgame">Ajouter</router-link> 
  <router-link to="/">Annuler</router-link> 
</div>
</div>
</template>
