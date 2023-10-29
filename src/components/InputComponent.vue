<script setup>
defineProps(['modelValue', 'placeHolder'])
defineEmits(['update:modelValue'])
</script>
<template>
    <div>
    <input @input="$emit('update:modelValue',$event.target.value)"  
    :placeholder="placeHolder" :value="modelValue" />
</div>
</template>
<style lang="scss">

</style>