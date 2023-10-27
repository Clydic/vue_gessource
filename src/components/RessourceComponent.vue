<script setup>
defineEmits(['update:valueModel'])
// TODO créer un input dans un fichier à part
// TODO Ajouter le nouveau component
</script>
<template>
    <div class="m-auto d-flex flex-column col-3">
        <input class="text-center" v-for="item in liste_of_line" 
        key="item.index" :placeholder="item.description" 
        @keypress="$emit('update:valueModel',$event.target.value)"
        :value="item.value"/>

    <div class="mt-5 mx-auto">
        <slot name = "submit"></slot>
        <slot name = "delete"></slot>

        <router-link to="/game/props.name">Cancel</router-link>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        name:String,
        liste_of_line:Array,
        valueModel:Array
        
        
        }
    }

</script>
<style>

</style>

