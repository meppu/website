<script lang="ts">
import { useRepositoriesStore } from '@/stores/repositories'
import ProjectCard from '../components/ProjectCard.vue'

export default {
  setup() {
    return { repoStore: useRepositoriesStore() }
  },

  components: {
    ProjectCard
  },

  mounted() {
    this.repoStore.fetch('meppu')
  }
}
</script>

<template>
  <main>
    <h1>📦 GitHub Repositories</h1>
    <p class="description">Explore my GitHub repositories.</p>
    <div class="grid-container">
      <ProjectCard
        v-for="repo in repoStore.repositories"
        :key="repo.name"
        :name="repo.name"
        :desc="repo.description"
        :link="repo.html_url"
        :language="repo.language"
        :stars="repo.stargazers_count"
      />
    </div>
  </main>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 620px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
}
</style>
