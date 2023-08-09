<script lang="ts">
import TechBox from '../components/TechBox.vue'

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
    TechBox
  }
}
</script>

<template>
  <main
    v-motion
    :initial="{
      opacity: 0,
      y: 100
    }"
    :enter="{
      opacity: 1,
      y: 0
    }"
    :delay="100"
  >
    <h1>🔨 Compilation of Technologies</h1>
    <p>
      Compilation of languages and frameworks I <strong>presently</strong> favour, note that this
      list doesn't include all frameworks, nor tools, nor services.
    </p>

    <div>
      <TechBox
        v-for="tech in technologies"
        :key="tech.title"
        :title="tech.title"
        :link="tech.link"
        :desc="tech.desc"
      />
    </div>
  </main>
</template>

<style scoped>
p {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>
