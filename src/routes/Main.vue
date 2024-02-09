<script setup lang="ts">
import Deparements from "../components/Departments.vue";
import ProductSquare from "../components/ProductSquare.vue";
import Topbar from "../components/Topbar.vue";
import { products, Departments } from "../data/fakedata";
</script>

<template>
    <div class="toplevel">
        <Topbar class="topbar" />
        <div class="sidebar">
            <Deparements v-for="department of Departments" v-bind="department" />
        </div>
        <div class="main">
            <ProductSquare v-for="product of products" v-bind="product" />
        </div>
    </div>
</template>

<style>
.toplevel {
    display: grid;
    grid-template-columns: 0fr 2fr;
    grid-template-rows: 0fr 2fr;
    grid-auto-flow: row;
    grid-template-areas:
        "topbar topbar"
        "sidebar main";
}

.topbar {
    grid-area: topbar;
}

.sidebar {
    grid-area: sidebar;
    padding: 1rem;
    width: 16rem;
}

.main {
    grid-area: main;
    padding: 1rem;
    gap: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
}
</style>