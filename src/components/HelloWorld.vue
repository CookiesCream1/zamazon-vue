<script setup lang="ts">
import { ref } from 'vue';

const count = ref(1)
const names = ref<String[] | unknown>([])

function increase() {
  count.value = count.value*2
}

function decrease() {
  count.value = count.value/2;
  count.value = Math.ceil(count.value)
}

function cock(){
  fetch("http://localhost:8080/test/data?count=3")
    .then(cum => cum.json() as unknown as string[])
    .then(data => names.value = data)
    .catch(err => names.value = err)
}
</script>

<template>
  <p>{{ count }}</p>
  <br>
  <div style="width: 12rem; justify-content: space-around; display: flex;">
    <button type="button" @click="increase()">+</button>
    <button tpe="button" @click="decrease()">-</button>
  </div>
  <button type="button" @click="cock()">cock.</button>
  <ul>
    <li v-if="Array.isArray(names) && (names as any[]).every(v => typeof v === 'string')" v-for="name in names">
        {{ name }}
    </li>
    <li v-else>
        an error occurred
        {{ names }}
    </li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
