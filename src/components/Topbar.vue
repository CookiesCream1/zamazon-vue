<script setup lang="ts">
import { useUserStore } from "../data/User";
const user = useUserStore()
</script>

<template>
    <div class="mainmenu">
        <a href="testing page"></a>
        <a href="testing page">test</a>
        <input type="text" id="search" name="search" style=" display: flex;
    align-self:center;
    width:auto;
    height: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;">
        <label for="search">search?</label>
        <a href="testing page">test</a>
        <a href="testing page">test</a>
        <p v-if="user.tag == 'not logged in'">not logged in</p>
        <p v-else>user: {{ user.name }}</p>
    </div>
</template>

<style>
.mainmenu {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: space-around;
    justify-content: space-between;
    background-color: #000000;
    height: 4rem;
    width: 100vw;
}
</style>