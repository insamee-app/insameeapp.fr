<template>
  <div
    class="
      min-h-[calc(100vh-64px)]
      px-4
      pb-4
      pt-12
      md:p-16
      flex flex-col
      justify-between
      items-stretch
      antialiased
    "
  >
    <TitleTeam :state="teamState" @active="setActiveProject" />

    <section class="flex flex-col items-stretch space-y-6 md:space-y-0">
      <TitleService
        v-for="service in services"
        :key="service.name"
        :state="service.state"
        :name="service.name"
        @active="setActiveProject"
      />
    </section>

    <footer>
      <address
        class="
          flex flex-col
          items-end
          not-italic
          text-base
          font-segoe font-semibold
        "
      >
        <span class="text-gray-500">Nous contacter</span>
        <a class="text-gray-700" href="mailto:contact@insamee.fr">
          contact@insamee.fr
        </a>
      </address>
    </footer>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  setup() {
    const services = ref([
      {
        name: 'tutorat',
        state: 'normal',
      },
      {
        name: 'evenements',
        state: 'normal',
      },
      {
        name: 'associations',
        state: 'normal',
      },
      {
        name: 'mee',
        state: 'normal',
      },
    ])

    const teamState = ref('active')

    function setActiveProject(name) {
      if (name && name !== 'team') teamState.value = 'inactive'
      else teamState.value = 'active'

      services.value.forEach((service) => {
        if (name === 'team') {
          service.state = 'first'
        } else if (service.name === name) {
          service.state = 'active'
        } else if (name) {
          service.state = 'inactive'
        } else {
          service.state = 'normal'
        }
      })
    }

    return {
      setActiveProject,
      services,
      teamState,
    }
  },
}
</script>
