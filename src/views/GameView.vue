<script setup>
import H2Component from '../components/H2Component.vue'
import RessourceItem from '../components/RessourceItem.vue'
</script>

<template>
    <div class="d-flex flex-column m-auto">
        <H2Component :title="title"/>
        <div>
            <RessourceItem/>
        </div>    
        <div class="d-flex flex-column">
            <RouterLink :to="{ name:'addressource',params:{game:title  }}">
            
                <img class="m-auto" src="../assets/plus.svg"
                     alt="plus" id="icon-plus"/>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title : "test"
        }
    }
}
</script>

<style lang="scss">
    #icon-plus{
        width:6em
    }
</style>