import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status', {
  state() {
    return {
      discordStatus: 'Offline',
      revoltStatus: 'Offline',
      needFetch: true
    }
  },
  actions: {
    async fetch(discordId: string, revoltId: string) {
      if (!this.needFetch) return

      const discordPromise = fetch(`https://api.lanyard.rest/v1/users/${discordId}`)
      const revoltPromise = fetch(`https://revard.meppu.boo/api/users/${revoltId}`)

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
        this.needFetch = false
      })
    }
  }
})
