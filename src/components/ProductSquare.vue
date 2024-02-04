<script setup lang="ts">
// @ts-expect-error: could not find a type declaration file for module 'vue-star-rating'.
import StarRating from 'vue-star-rating';
defineProps<{
    title: string,
    detailText: string,
    price: number,
    rating: number,
    imageLink: string
}>()
</script>

<template>
<div class = "boundingbox">
    <img :src="imageLink" width=250px>
    <h3 style="padding-left: 5%;">{{ title }}</h3>
    <div class="starfix">
        <StarRating :read-only="true" :rating="rating" :increment="0.5" :show-rating="false" :star-size="45"/>
    </div>
    <p>{{ detailText }}</p>
    <div class="priceContainer">
        <div>$</div>
        <div style="font-size: 2em; line-height: 2rem;">{{ Math.floor(price) }}</div>
        <div>{{ price * 100 - Math.floor(price) * 100 }}</div>
    </div>
</div>
</template>

<style>
.boundingbox {
    background-color: antiquewhite;
    border: solid;
    border-color: azure;
    color: black;
    width:min-content;
    display: flex;
    flex-direction: column;
    align-items: start;
}
.priceContainer {
    display: flex;
    padding: .5rem;
}
</style>