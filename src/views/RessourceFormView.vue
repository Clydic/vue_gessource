<script setup>
import H2Component from '../components/H2Component.vue';
import RessourceComponent from '../components/RessourceComponent.vue';
import axios from 'axios';
const title = 'test'
</script>

<template>
    <div class="d-flex flex-column m-auto">
        <H2Component :title="title"/>
        <div>
            <RessourceComponent :liste_of_line="list_of_placeholder" >
                <template #submit>
                    <router-link to="/game/test" @click="addRessource">Ajouter</router-link>
                </template>
            </RessourceComponent>
        </div>    
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
    },
    methods:{
       addRessource(){
axios.post('http://localhost:4000/games/test',{ressource:this.list_of_placeholder[0].value,
            values:{vmin:this.list_of_placeholder[1].value,
            vmax:this.list_of_placeholder[2].value,
            vdefaut:this.list_of_placeholder[3].value,
            vact:this.list_of_placeholder[3].value,
            }
}).then((response) =>console.log(response))
.catch(error=>console.log(error));
       } 
    }
}
</script>

<style lang="scss">
</style>
