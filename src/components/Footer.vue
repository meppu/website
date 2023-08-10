<script lang="ts">
export default {
  setup() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<template>
  <footer>
    <hr />
    <p>👻 - {{ year }}</p>
  </footer>
</template>

<style scoped>
hr {
  margin: 2rem 0 1rem 0;
  border: 1px solid var(--color-overlay);
  border-radius: 5px;
}

p {
  text-align: right;
  color: var(--color-subtle);
  font-weight: 500;
}

@media (max-width: 620px) {
  hr {
    margin: 1rem;
    margin-bottom: 0;
  }

  p {
    margin: 1rem;
    margin-top: 0.5rem;
  }
}
</style>
