<script setup lang="ts">
defineProps<{
  Deparements: { name: string; checked: boolean }[];
  title: string;
}>();
</script>

<template>
  <div class="alignment">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="department in Deparements">
        <div style="display: flex; gap: 0.5rem">
          <input
            type="checkbox"
            :id="department.name"
            v-model="department.checked"
          />
          <p>{{ department.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
.alignment {
  display: flex;
  flex-direction: column;
}

.fix {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

li {
  list-style: none;
}

p {
  margin: 0;
}
</style>
