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
      <RouterLink @click="play" to="/projects">Projects</RouterLink>
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

  background: var(--color-surface);
  border: 1px solid var(--color-overlay);
  border-radius: 4rem;
  padding: 0.4rem 1rem;

  font-weight: 500;

  box-shadow: var(--color-shadow) 0px 0px 12px;
}

div > nav {
  display: flex;
  align-items: center;

  font-size: small;
}

div > nav > a {
  text-decoration: none;
  color: var(--color-text);
  transition: 0.25s;
}

div > nav:first-child > a {
  margin: 0.2rem;
}

div > nav:last-child > a {
  margin-left: 0.2rem;
  width: 1.8rem;
  height: 1.6rem;
}

div > nav:last-child > a:first-child {
  width: 1.6rem;
  height: 1.5rem;
}

div > nav > a:hover,
div > nav > a.router-link-active {
  color: var(--color-iris);
}

@media (max-width: 620px) {
  div {
    display: block;
    border-radius: 0;
    border: none;
    text-align: center;
    box-shadow: none;
  }

  div > nav {
    justify-content: center;
    margin: 0.25rem;
  }
}
</style>
