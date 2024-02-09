<script setup lang="ts">
import Topbar from '../components/Topbar.vue';
</script>

<template>
    <div class="toplevel">
        <Topbar class="topbar" />
        <RouterView />
    </div>
</template>