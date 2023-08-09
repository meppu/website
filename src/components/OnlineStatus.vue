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

span.Online {
  color: var(--color-iris);
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
</style>
