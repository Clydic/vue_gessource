<template>
    <div class="d-flex">
        <div class="d-flex flex-row">
            <p class="align-middle">{{ ressource_name }}</p>
            <p class="align-middle">{{ ressource_value }}</p>
        </div>
        <input/>
        <div class="d-flex flex-column">
            <button >+</button>
            <button >-</button>
        </div>
        <button>set</button>
        <button>reset</button>
        <button>delete</button>
    </div> 
</template>

<script>
export default {
    data(){
        return{
            ressource_name:"Pv",
            ressource_value:"145/145"
        }
    }

}
</script>

<style>

</style>