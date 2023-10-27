<template>
    <div class="d-flex">
        <div class="d-flex flex-row">
            <p class="align-middle">{{ ressource.name }}</p>
            <p class="align-middle">{{ ressource.actuelle }}/{{ ressource.max }}</p>
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
    data(){
        return{
            ressource:{
                name:"Pv",
                max:140,
                min:-10,
                default:140,
                actuelle:120
            },
            input_value:0
        }
    },
methods: {
    add(){
        this.ressource.actuelle=parseInt(this.ressource.actuelle ) + parseInt( this.input_value);
        this.input_value = 0;
        if (this.ressource.actuelle > this.ressource.max){ 
            this.ressource.actuelle = this.ressource.max;
        }
    },

    minus(){
        this.ressource.actuelle=parseInt(this.ressource.actuelle ) - parseInt( this.input_value);
        this.input_value = 0;
        if (this.ressource.actuelle < this.ressource.min){ 
            this.ressource.actuelle = this.ressource.min;
        }
    },
    reset(){
        this.ressource.actuelle = this.ressource.default
    }
}

}
</script>

<style lang="scss">


</style>