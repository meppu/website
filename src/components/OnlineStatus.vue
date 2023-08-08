<script lang="ts">
export default {
  data() {
    return {
      discordStatus: 'Offline',
      revoltStatus: 'Offline'
    }
  },

  props: {
    discordId: String,
    revoltId: String
  },

  async mounted() {
    const discordPromise = fetch(`https://api.lanyard.rest/v1/users/${this.$props.discordId}`)
    const revoltPromise = fetch(`https://revard.meppu.boo/api/users/${this.$props.revoltId}`)

    Promise.all([discordPromise, revoltPromise]).then(async ([discordResp, revoltResp]) => {
      const {
        data: { discord_status: discord_status }
      } = await discordResp.json()
      const { online: revolt_online } = await revoltResp.json()

      switch (discord_status) {
        case 'online':
          this.discordStatus = 'Online'
          break

        case 'dnd':
          this.discordStatus = 'Busy'
          break

        case 'idle':
          this.discordStatus = 'Idle'
          break

        case 'offline':
          this.discordStatus = 'Offline'
          break
      }

      this.revoltStatus = revolt_online ? 'Online' : 'Offline'
    })
  }
}
</script>

<template>
  <div>
    <p>
      <span :class="discordStatus">{{ discordStatus }}</span> on Discord
    </p>
    <p>
      <span :class="revoltStatus">{{ revoltStatus }}</span> on Revolt
    </p>
  </div>
</template>

<style scoped>
p {
  font-size: small;
  font-weight: 500;
}

span.Online {
  color: var(--rp-iris);
}

span.Busy {
  color: var(--rp-love);
}

span.Idle {
  color: var(--rp-rose);
}

span.Offline {
  color: var(--rp-muted);
}
</style>
