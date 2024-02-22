<script setup>
import H2Component from '../components/H2Component.vue'
import RessourceItem from '../components/RessourceItem.vue'
import RessourceDataService from '../service/RessourceDataService';
</script>

<template>
    <div class="d-flex flex-column m-auto">
        <H2Component :title="title"/>
        <div v-for="(value, key) in ressources" :key="key">
            <RessourceItem :name_ressource="key" :values_ressource="value" />
            {{ value }}
        </div>    
        <div class="d-flex flex-column">
            <RouterLink :to="{ name:'addressource',params:{game:title}}">
            
                <img class="m-auto " src="../assets/plus.svg"
                     alt="plus" id="icon-plus"/>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title : "test",
            ressources:{}
        }
    },
    created(){
        RessourceDataService.getAll(this.title)
        .then(response=>{
            const data = response.data;
            this.ressources=data;
            
        }).catch(error=>console.log(error))
    }
}
</script>

<style lang="scss">
    #icon-plus{
        width:10px
    }
</style>