<script setup lang="ts">
defineProps<{
Deparements: {name:string, checked:boolean}[]

title: string[]
}>()
</script>

<template>
<div class="alignment">
<h3>{{ title }}</h3>
<li v-for="department in Deparements">
    <div style="display:flex">
        {{ department.name }}
        <input type="checkbox" :id="department.name" v-model="department.checked">
        </div>
</li>
</div>


</template>

<style>
.alignment{
    display: flex;
    flex-direction: column;
}
.fix{
    display: flex;
    flex-direction: column;
    justify-content: start;
}
</style>