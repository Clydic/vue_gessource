<script setup>
import H2Component from '../components/H2Component.vue';
import RessourceComponent from '../components/RessourceComponent.vue';
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
import RessourceDataService from '../service/RessourceDataService';
export default {
    data() {
        return{
        title : 'test',
            ressource_to_create:{
                ressource:"",
                values:{
                    vmin:0,
                    vmax:0,
                    vdefaut:0,
                    vact:0
                }
            },
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
        console.log(`titre:${this.title}`)
RessourceDataService.create(this.title,{
            ressource:this.list_of_placeholder[0].value,
            values:{
                vmin:this.list_of_placeholder[1].value,
                vmax:this.list_of_placeholder[2].value,
                vdefaut:this.list_of_placeholder[3].value,
                vact:this.list_of_placeholder[3].value,
            }
        })
        .then((response) =>console.log(response))
        .catch(error=>console.log(error));
       } 
    }
}
</script>

<style lang="scss">
</style>
