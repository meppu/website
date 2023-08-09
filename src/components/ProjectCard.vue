<script lang="ts">
import IconStar from './icons/IconStar.vue'

export default {
  props: {
    name: String,
    desc: String,
    stars: Number,
    link: String,
    language: String
  },

  components: {
    IconStar
  }
}
</script>

<template>
  <div class="child-container">
    <div>
      <a :href="link" target="_blank">{{ name }}</a>
      <p>{{ desc }}</p>
    </div>
    <div class="flex-container">
      <p :class="language">{{ language }}</p>
      <IconStar :count="stars" />
    </div>
  </div>
</template>

<style scoped>
div.child-container {
  background: var(--color-surface);
  border: 1px solid var(--color-overlay);
  border-radius: 8px;

  display: grid;

  padding: 1em;
  transition: 0.25s;
}

div.child-container:hover {
  background: var(--color-overlay);
}

div.child-container a {
  font-size: medium;
  text-decoration: none;

  color: var(--color-text);
}

div.child-container p {
  font-size: small;
  color: var(--color-muted);
}

div.flex-container {
  align-self: end;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

div.flex-container > p {
  margin-top: 1em;
}

div.flex-container > p::before {
  display: inline-block;
  margin-right: 0.4em;

  background: #000;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  content: ' ';
}
div.flex-container > p.Nix::before {
  background: #7e7eff;
}

div.flex-container > p.Elixir::before {
  background: #6e4a7e;
}

div.flex-container > p.Erlang::before {
  background: #b83998;
}

div.flex-container > p.Vue::before {
  background: #41b883;
}

div.flex-container > p.HTML::before {
  background: #e34c26;
}

div.flex-container > p.TypeScript::before {
  background: #3178c6;
}

div.flex-container > p.JavaScript::before {
  background: #f1e05a;
}

div.flex-container > p.Rust::before {
  background: #dea584;
}

div.flex-container > p.C::before {
  background: #555555;
}
div.flex-container > p.Zig::before {
  background: #ec915c;
}
</style>
