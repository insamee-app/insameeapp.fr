<script>
import { computed } from '@nuxtjs/composition-api'
export default {
  name: 'TitleTeam',
  props: {
    state: {
      type: String,
      required: true,
      validator: (value) => ['active', 'inactive'].includes(value),
    },
  },
  setup(props, { emit }) {
    function mouseEnterHandler(e) {
      if (e.pointerType === 'touch') return

      emit('active', 'team')
    }

    function mouseLeaveHandler(e) {
      if (e.pointerType === 'touch') return

      emit('active', false)
    }

    const isInactive = computed(() => {
      return props.state === 'inactive'
    })

    return {
      mouseEnterHandler,
      mouseLeaveHandler,
      isInactive,
    }
  },
}
</script>

<template>
  <div
    :class="{ 'opacity-40': isInactive }"
    class="
      py-2
      text-center
      transition-opacity
      duration-500
      text-4xl
      md:text-8xl
      text-black
      hover:text-white
      font-black font-robot
    "
    :style="{
      '-webkit-text-fill-color': isInactive ? 'white' : 'black',
    }"
    @pointerenter="mouseEnterHandler"
    @pointerleave="mouseLeaveHandler"
  >
    <h1>TEAM</h1>
  </div>
</template>

<style scoped>
div {
  -webkit-text-stroke: 1px black;
}
</style>
