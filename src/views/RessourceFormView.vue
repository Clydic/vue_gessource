<script setup>
import H2Component from '../components/H2Component.vue'
import RessourceComponent from '../components/RessourceComponent.vue'
const title = 'test'
</script>

<template>
    <div class="d-flex flex-column m-auto">
        <H2Component :title="title"/>
        <div>
            <RessourceComponent :liste_of_line="list_of_placeholder" v-model="list_of_placeholder">
                <template #submit>
                    <router-link to="/game/test">Ajouter</router-link>
                </template>
            </RessourceComponent>
        </div>    
        {{ list_of_placeholder[0].value }}
    </div>
</template>
<script>
export default {
    data() {
        return{
                
            list_of_placeholder : [
                    {'index':0, 'description':'Name of Game', 'value':""},
                    {'index':1, 'description':'Minimum Value', 'value':0},
                    {'index':2, 'description':'Maximum Value', 'value':0},
                    {'index':3, 'description':'Default Value', 'value':0},
                ]
        }
    }
}
</script>

<style lang="scss">
</style>
