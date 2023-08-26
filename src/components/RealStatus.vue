<script lang="ts">
export default {
  data() {
    return {
      status: 'Unknown for some reason... 🧐'
    }
  },

  async mounted() {
    const istanbulDateNow = new Date().toLocaleString('tr', { timeZone: 'Europe/Istanbul' })

    const [datePart, timePart] = istanbulDateNow.split(' ')
    const [_day, month, _year] = datePart.split('.').map(Number)
    const [hours, ..._rest] = timePart.split(':').map(Number)

    const nonSchoolMonths = [6, 7, 8]
    const nonSchoolAvailable = [11, 21]
    const schoolAvailable = [17, 23]
    const sleeping = [0, 10]

    if (hours >= sleeping[0] && hours <= sleeping[1]) {
      this.status = "I'm most likely asleep 😴"
      return
    }

    if (nonSchoolMonths.includes(month)) {
      if (hours >= nonSchoolAvailable[0] && hours <= nonSchoolAvailable[1]) {
        this.status = 'You can likely contact me 🥳'
      } else {
        this.status = 'Grant me a little time 🥱'
      }
    } else {
      if (hours >= schoolAvailable[0] && hours <= schoolAvailable[1]) {
        this.status = 'You might reach me 🙂'
      } else {
        this.status = "I'm most likely at school 🤓"
      }
    }
  }
}
</script>

<template>
  <p class="description">
    {{ status }}
    <span>
      (?) The above status is estimated and not always certain. For quickest contact, please use the
      email on the site.
    </span>
  </p>
</template>

<style scoped>
span {
  display: block;
  font-weight: 400;

  color: var(--color-subtle);
  opacity: 0.5;
}

p {
  font-size: small;
  font-weight: 500;
}

@media (max-width: 960px) {
  p {
    font-weight: 400;
  }

  span {
    font-size: x-small;
  }
}
</style>
