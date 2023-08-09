<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  title: string
  link: string
  desc: string
}>()

const Icon = defineAsyncComponent(() => import(`./icons/Icon${props.title}.vue`))
</script>

<template>
  <div class="child-container">
    <Icon />
    <div>
      <a :href="props.link">{{ props.title }}</a>
      <p>{{ props.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
div.child-container {
  background: var(--color-surface);
  border: 1px solid var(--color-overlay);
  border-radius: 10px;

  margin: 1em;

  display: flex;
  align-items: center;

  transition: 0.25s;
}

div.child-container:hover {
  background: var(--color-overlay);
}

div.child-container > div > a {
  font-size: medium;
  text-decoration: none;

  color: var(--color-text);
}

div.child-container > svg {
  background: var(--color-overlay);

  margin-right: 0.75rem;
  width: 4rem;
  height: 100%;
  padding: 1rem;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

div.child-container > div > p {
  font-size: smaller;
  color: var(--color-muted);
}
</style>
