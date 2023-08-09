<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <div id="content">
    <RouterView />
  </div>

  <Footer />
</template>

<style scoped>
div#content {
  padding: 1.3rem;
}
</style>
