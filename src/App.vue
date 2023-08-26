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
      <RouterView 
    v-motion
    :initial="{
      opacity: 0
    }"
    :enter="{
      opacity: 1
    }"
    :delay="250" />
    </div>

    <Footer />
</template>

<style scoped>
</style>
