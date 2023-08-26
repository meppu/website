<script lang="ts">
import { useStatusStore } from '@/stores/status'

export default {
  props: {
    discordId: String,
    revoltId: String
  },

  setup() {
    return { status: useStatusStore() }
  },

  mounted() {
    this.status.fetch(this.discordId!, this.revoltId!)
  }
}
</script>

<template>
  <div>
    <p>
      <span :class="status.discordStatus">{{ status.discordStatus }}</span> on Discord
    </p>
    <p>
      <span :class="status.revoltStatus">{{ status.revoltStatus }}</span> on Revolt
    </p>
  </div>
</template>

<style scoped>
p {
  font-size: small;
  font-weight: 500;
}

span {
  display: inline-flex;
  align-items: center;
}

span::before {
  content: " ";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
  border: 2px solid var(--color-base);
  display: inline-block;
  background: currentColor;
}

span.Online {
  color: var(--color-foam);
}

span.Busy {
  color: var(--color-love);
}

span.Idle {
  color: var(--color-rose);
}

span.Offline {
  color: var(--color-muted);
}

@media (max-width: 620px) {
  p {
    font-weight: 400;
  }
}
</style>
