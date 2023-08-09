<script lang="ts">
import IconGithub from './icons/IconGithub.vue'
import IconDiscord from './icons/IconDiscord.vue'
import IconEmail from './icons/IconEmail.vue'

import { useSound } from '@vueuse/sound'
import clickTone from '../assets/sounds/interface-click-tone.mp3'

export default {
  components: {
    IconGithub,
    IconDiscord,
    IconEmail
  },
  setup() {
    const { play, _stop } = useSound(clickTone, { playbackRate: 0.5 })
    return { play }
  }
}
</script>

<template>
  <div>
    <nav>
      <RouterLink @click="play" to="/">Home</RouterLink>
      <RouterLink @click="play" to="/technologies">Technologies</RouterLink>
    </nav>
    <nav>
      <a href="https://github.com/meppu" target="_blank">
        <IconGithub />
      </a>
      <a href="https://discord.com/users/1013270483560579165" target="_blank">
        <IconDiscord />
      </a>
      <a href="mailto:website@meppu.boo">
        <IconEmail />
      </a>
    </nav>
  </div>
</template>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--rp-surface);
  border: 1px solid var(--rp-overlay);
  border-radius: 40px;
  padding: 0.4rem 1rem;

  font-weight: 500;
}

div > nav {
  display: flex;
  align-items: center;

  font-size: small;
}

div > nav > a {
  text-decoration: none;
  color: var(--rp-text);
  transition: 0.25s;
}

div > nav:first-child > a {
  margin: 0.2rem;
}

div > nav:last-child > a {
  margin: 0 0 0 0.5rem;

  width: 2em;
  height: 2em;
}

div > nav:last-child > a:first-child {
  width: 1.8em;
  height: 1.75em;
}

div > nav > a:hover,
div > nav > a.router-link-active {
  color: var(--rp-iris);
}
</style>
