<script setup>
const props = defineProps(['title'])
</script>
<template>
  <div class="d-flex flex-column ">
    <h2 class="m-auto p-3">{{props.title}}</h2>
  </div>
        
</template>

<style scoped>
</style>

