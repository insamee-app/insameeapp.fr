<template>
  <div class="w-full min-h-screen flex flex-col justify-evenly items-center">
    <TitleTeam @active="setActiveProject" />

    <section class="flex flex-col items-center space-y-6">
      <TitleService
        v-for="service in services"
        :key="service.name"
        :state="service.state"
        :name="service.name"
        @active="setActiveProject"
      />
    </section>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  setup() {
    const services = ref([
      {
        name: 'tutorat',
        state: 'inactive',
      },
      {
        name: 'évènements',
        state: 'inactive',
      },
      {
        name: 'associations',
        state: 'inactive',
      },
      {
        name: 'mee',
        state: 'inactive',
      },
    ])

    function setActiveProject(name) {
      services.value.forEach((service) => {
        if (name === 'team') {
          service.state = 'first'
        } else if (service.name === name) {
          service.state = 'active'
        } else {
          service.state = 'inactive'
        }
      })
    }

    return {
      setActiveProject,
      services,
    }
  },
}
</script>
