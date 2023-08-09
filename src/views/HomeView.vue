<script setup lang="ts">
import OnlineStatus from '../components/OnlineStatus.vue'
import RealStatus from '../components/RealStatus.vue'
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
    <h1>👋 Welcome</h1>
    <p class="description">I'm meppu, a self-taught software engineer from Turkey.</p>

    <OnlineStatus discord-id="1013270483560579165" revolt-id="01F6YN5JWMHJFKPDZVYB6434HX" />
    <RealStatus />

    <h2>💻 Programming</h2>
    <p class="description">
      Whilst my primary focus centres on Rust and the BEAM ecosystem, it's important to note that
      this doesn't imply I'm solely capable of working with them. What distinguishes us from the
      typical "frameworker" is our ability to quickly adapt to various technologies.
    </p>

    <h2>😺 Additional</h2>
    <p class="description">
      However, my interests go beyond just coding. My life isn't all about programming. I'm a big
      fan of cats and, to be honest, I like cats more than humans. Even if I don't play games much,
      I enjoy playing family-friendly (!) games like Half-Life, POSTAL, DOOM, and more. If you need
      to contact me quickly, feel free to send me an email.
    </p>
  </main>
</template>
