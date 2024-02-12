<script setup lang="ts">
import Topbar from "../components/Topbar.vue";
</script>

<template>
  <div class="toplevel">
    <Topbar class="topbar" />
    <div style="width: 98vw">
      route
      {{
        Array.isArray($route.params.path)
          ? $route.params.path.reduce((a, b) => `${a}/${b}`)
          : $route.params.path
      }}
      does not exist.
    </div>
  </div>
</template>
