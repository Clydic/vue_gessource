<template>
    <div class="d-flex">
        <div class="d-flex flex-row">
            <p class="align-middle">{{ name_ressource}}</p>
            <p class="align-middle">{{ values_ressource.vact }}/{{ values_ressource.vmax }}</p>
        </div>
        <input v-model="input_value" placeholder="Entrer une valeur sans le signe"/>
        <div class="d-flex flex-column">
            <button @click="add">+</button>
            <button @click="minus">-</button>
        </div>
        <button>set</button>
        <button @click="reset">reset</button>
        <button>delete</button>
    </div> 
</template>

<script>
export default {
    props:{
        name_ressource:String,
        values_ressource:Object
    },
    data(){
        return{
            // ressource:{
            //     PV:{
            //     vmax:140,
            //     vmin:-10,
            //     vdefault:140,
            //     vactuelle:120}
            // },
            ressource:{ name_ressource : this.name_ressource,
            values_ressource : this.values_ressource
            },
            input_value:0
        }
    },
methods: {
    add(){
        this.ressource.values_ressource.vact=parseInt(this.ressource.values_ressource.vact ) 
        + parseInt( this.input_value);
        this.input_value = 0;
        if (this.ressource.values_ressource.vact > this.ressource.values_ressource.vmax){ 
            this.ressource.values_ressource.vact= this.ressource.values_ressource.vmax;
        }
    },

    minus(){
        this.ressource.values_ressource.vact=parseInt(
            this.ressource.values_ressource.vact ) 
        - parseInt( this.input_value);
        this.input_value = 0;
        if (this.ressource.values_ressource.vact < this.ressource.values_ressource.vmin){ 
            this.ressource.values_ressource.vact= this.ressource.values_ressource.vmin;
        }
    },
    reset(){
        this.ressource.values_ressource.vact = this.ressource.values_ressource.vdefaut
    }
 }

}
</script>

<style lang="scss">


</style>