<script>
import { computed } from '@nuxtjs/composition-api'
export default {
  name: 'TitleService',
  props: {
    name: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      validator: (value) =>
        ['active', 'first', 'inactive', 'normal'].includes(value),
    },
  },
  setup(props, { emit }) {
    const name = props.name

    function mouseEnterHandler(e) {
      if (e.pointerType === 'touch') return

      emit('active', name)
    }

    function mouseLeaveHandler(e) {
      if (e.pointerType === 'touch') return

      emit('active', false)
    }

    const cutName = {
      firstLetter: name.charAt(0),
      otherLetter: name.slice(1),
    }

    const isInactive = computed(() => {
      return props.state === 'inactive'
    })

    const isActive = computed(() => {
      return props.state === 'active'
    })

    const isFirst = computed(() => {
      return props.state === 'first'
    })

    return {
      cutName,
      mouseEnterHandler,
      mouseLeaveHandler,
      isInactive,
      isActive,
      isFirst,
    }
  },
}
</script>

<template>
  <h2
    class="
      md:py-6
      flex flex-row
      justify-center
      md:justify-start
      items-center
      text-4xl
      tracking-wide
      md:text-8xl
      uppercase
      text-white
      hover:text-black
      font-black font-roboto
      transition-all
      duration-500
    "
    :style="{
      '-webkit-text-fill-color': isActive ? 'black' : 'white',
    }"
    :class="{ 'opacity-40': isInactive }"
    @pointerenter="mouseEnterHandler"
    @pointerleave="mouseLeaveHandler"
  >
    <span>
      {{ cutName.firstLetter }}
    </span>
    <span
      class="transition-opacity duration-500"
      :class="{ 'opacity-40': isFirst }"
    >
      {{ cutName.otherLetter }}
    </span>
  </h2>
</template>

<style scoped>
h2 {
  -webkit-text-stroke: 1px black;
}
</style>
