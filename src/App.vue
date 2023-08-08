<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <div id="content">
    <RouterView />
  </div>
</template>

<style scoped>
div#content {
  padding: 1.3rem;
}
</style>
