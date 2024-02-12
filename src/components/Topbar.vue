<script setup lang="ts">
import { useUserStore } from "../data/User";
import { RouterLink } from "vue-router";
const user = useUserStore();
</script>

<template>
  <div class="mainmenu">
    <router-link to="/">home</router-link>
    <input type="text" id="search" name="search" />
    <label for="search">search?</label>
    <router-link to="/test/hworld">test</router-link>
    <router-link to="/test/hworld">test</router-link>
    <router-link to="/login" v-if="user.tag == 'not logged in'"
      >not logged in</router-link
    >
    <p v-else>user: {{ user.name }}</p>
  </div>
</template>

<style>
.mainmenu {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #000000;
  height: 4rem;
  padding: 1rem;
}
</style>
