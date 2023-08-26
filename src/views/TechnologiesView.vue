<script lang="ts">
import TechCard from '../components/TechCard.vue'

export default {
  data() {
    return {
      technologies: [
        {
          title: 'Elixir',
          link: 'https://elixir-lang.org/',
          desc: 'Building scalable, fault-tolerant, real-time applications with many 9s.'
        },
        {
          title: 'Erlang',
          link: 'https://erlang.org/',
          desc: 'Building libraries that work across BEAM languages.'
        },
        {
          title: 'Rust',
          link: 'https://rust-lang.org/',
          desc: 'Writing efficient, robust applications. Optimising Elixir via NIFs.'
        },
        {
          title: 'Vue',
          link: 'https://vuejs.org/',
          desc: 'Constructing stateful, interactive frontends for web applications when needed.'
        },
        {
          title: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
          desc: 'To make JavaScript usable.'
        }
      ]
    }
  },

  components: {
    TechCard
  }
}
</script>

<template>
  <main>
    <h1>🔨 Compilation of Technologies</h1>
    <p class="description">
      Compilation of languages and frameworks I <strong>presently</strong> favour, note that this
      list doesn't include all frameworks, nor tools, nor services.
    </p>

    <TechCard
      v-for="tech in technologies"
      :key="tech.title"
      :title="tech.title"
      :link="tech.link"
      :desc="tech.desc"
    />
  </main>
</template>
