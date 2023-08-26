<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavigationBar from './components/NavigationBar.vue'
import Footer from './components/Footer.vue'

import { onMounted } from 'vue';
import { useRepositoriesStore } from '@/stores/repositories'

// fetch repositories at start for better ux
onMounted(() => {
  useRepositoriesStore().fetch('meppu')
})
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
