import { defineStore } from 'pinia'

export interface GitHubRepo {
  name: string
  fork: boolean
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

export const useRepositoriesStore = defineStore('repositories', {
  state() {
    return {
      repositories: [] as GitHubRepo[],
      needFetch: true
    }
  },
  actions: {
    async fetch(username: string) {
      if (!this.needFetch) return

      const repositories: GitHubRepo[] = await (
        await fetch(`https://api.github.com/users/${username}/repos`)
      ).json()

      this.needFetch = false
      this.repositories = repositories
        .filter((value) => !value.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)
    }
  }
})
