<script setup lang="ts">
import Deparements from "./components/Departments.vue";
import ProductSquare from "./components/ProductSquare.vue";
import Topbar from "./components/Topbar.vue";
</script>

<template>
  <!--<HelloWorld/>-->
  <div style="display: flex;">
    <Deparements title="Zamazom Prime"
      :Deparements="[{ name: 'penile', checked: true }, { name: 'noisy', checked: false }, { name: 'will reccumends', checked: true }]" />
    <ProductSquare title="air pump"
      detail-text="pump that pumps some damn air.ahwohaonco ankod naokdn ownknaodnf koanos kdnpo iooijruijfernojsyloiknjvfroij dakn adknaokwnod"
      :price="5.99" :rating="4.5"
      image-link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3If1UMuNyngrrSSzjPsrdPpRD4Oknl7St1coP86i0J7Q-Npnh9rVeXRB3unQktSJ98U&usqp=CAU" />
    <Topbar />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
