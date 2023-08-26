<script lang="ts">
import IconHome from './icons/IconHome.vue'
import IconHammer from './icons/IconHammer.vue'
import IconPackage from './icons/IconPackage.vue'

import IconGithub from './icons/IconGithub.vue'
import IconDiscord from './icons/IconDiscord.vue'
import IconEmail from './icons/IconEmail.vue'

import { useSound } from '@vueuse/sound'
import clickTone from '../assets/sounds/interface-click-tone.mp3'

export default {
  components: {
    IconHome,
    IconHammer,
    IconPackage,

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
      <RouterLink @click="play" to="/"><IconHome /></RouterLink>
      <RouterLink @click="play" to="/technologies"><IconHammer /></RouterLink>
      <RouterLink @click="play" to="/projects"><IconPackage /></RouterLink>
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
  width: 100%;
  height: 100%;

  background: var(--color-surface);
  border: 1px solid var(--color-overlay);
  border-radius: 6px;
  padding: 1.2rem 0px 0.8rem;
}

div > nav {
  text-align: center;
  height: 50%;

  display: flex;
  flex-direction: column;
  gap: 6px;
}

div > nav:last-child {
  justify-content: flex-end;
}

div > nav > a {
  display: block;

  text-decoration: none;
  color: var(--color-text);
  transition: 0.25s;
}

div > nav > a > svg {
  width: 2rem;
  height: 24px;
}

div > nav > a:hover,
div > nav > a.router-link-active {
  color: var(--color-muted);
}

@media (max-width: 960px) {
  div {
    display: block;
    padding: 0 10px;
    padding-top: 8px;
    margin-bottom: 1rem;
  }

  div > nav {
    display: inline-flex;
    flex-direction: row;

    height: unset;
    width: 50%;
  }

  div > nav > a {
    display: unset;
  }

  div > nav > a > svg {
    width: 24px;
  }
}
</style>
