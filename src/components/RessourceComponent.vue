<script setup>
import InputComponent from './InputComponent.vue';
defineProps(['liste_of_line'])
defineEmits(['update:valueModel'])
// TODO créer un input dans un fichier à part
// TODO Ajouter le nouveau component
</script>
<template>
    <div class="m-auto d-flex flex-column col-3">
    <InputComponent v-for="line in liste_of_line" :key="line.index"
     :placeHolder="line.description" v-model="line.value" />
    <div class="mt-5 mx-auto">
        <slot name = "submit"></slot>
        <slot name = "delete"></slot>

        <router-link to="/game/props.name" >Cancel</router-link>
    </div>
    </div>
</template>
<script>

</script>
<style>

</style>

