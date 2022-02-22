<script>
import { ref } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default {
  setup() {
    const services = ref([
      {
        name: 'tutorat',
        state: 'normal',
        subtitle:
          'La plateforme de mise en relation des étudiants et des tuteurs',
      },
      {
        name: 'evenements',
        state: 'normal',
        subtitle:
          'La plateforme de mise en relation entre évènements et étudiants',
      },
      {
        name: 'associations',
        state: 'normal',
        subtitle: 'La plateforme de mise en relation des associations',
      },
      {
        name: 'mee',
        state: 'normal',
        subtitle: 'La plateforme de mise en relation des profils étudiants',
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

    const nav = ref()
    useMotion(nav, {
      initial: {
        opacity: 0,
      },
      enter: {
        opacity: 1,
        transition: {
          duration: 150,
        },
      },
    })

    return {
      setActiveProject,
      services,
      teamState,
      nav,
    }
  },
}
</script>

<template>
  <main
    class="
      relative
      h-screen
      px-4
      pb-4
      pt-20
      lg:px-16 lg:pb-16
      md:pt-20
      flex flex-col
    "
  >
    <TitleTeam :state="teamState" @active="setActiveProject" />

    <nav class="flex-grow flex items-center">
      <ul class="w-full flex flex-col items-stretch space-y-6 md:space-y-0">
        <TitleService
          v-for="(service, index) in services"
          :key="service.name"
          :state="service.state"
          :name="service.name"
          :subtitle="service.subtitle"
          :index="index"
          @active="setActiveProject"
        />
      </ul>
    </nav>

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
      <a class="text-gray-700" href="mailto:contact@insameeapp.fr">
        contact@insameeapp.fr
      </a>
    </address>
  </main>
</template>


