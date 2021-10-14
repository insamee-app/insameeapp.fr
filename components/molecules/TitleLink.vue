<script>
import { ref, computed, onMounted, watch } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default {
  name: 'TitleLink',
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
    index: {
      type: Number,
      required: true,
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

    const icon = ref()
    const iconMotion = useMotion(icon, {
      initial: {
        opacity: 0,
        scale: 0,
      },
      first: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 100 * props.index,
        },
      },
    })
    iconMotion.set({
      transition: {
        duration: 0.5,
      },
    })

    onMounted(() => {
      watch(
        () => props.state,
        (nVal) => {
          if (nVal === 'first') {
            iconMotion.variant.value = 'first'
          } else {
            iconMotion.variant.value = 'initial'
          }
        },
        { immediate: true }
      )
    })

    return {
      cutName,
      mouseEnterHandler,
      mouseLeaveHandler,
      isInactive,
      isActive,
      isFirst,
      icon,
    }
  },
}
</script>

<template>
  <div
    class="
      relative
      text-4xl
      md:text-8xl
      md:py-4
      flex flex-row
      justify-center
      md:justify-start
      items-center
      tracking-wide
      uppercase
      text-white
      font-black font-roboto
      transition-opacity
      duration-500
    "
    :style="{
      '-webkit-text-fill-color': isActive ? 'black' : 'white',
    }"
    :class="{ 'opacity-40': isInactive }"
    @pointerenter="mouseEnterHandler"
    @pointerleave="mouseLeaveHandler"
  >
    <span ref="icon" class="absolute -left-6 h-20 opacity-0 z-10">
      <IconTutorat class="w-full h-full" />
    </span>
    <span
      class="transition-opacity duration-200"
      :class="{ 'opacity-0': isFirst }"
    >
      {{ cutName.firstLetter }}
    </span>
    <span
      class="transition-opacity duration-500"
      :class="{ 'opacity-40': isFirst }"
    >
      {{ cutName.otherLetter }}
    </span>
  </div>
</template>

<style scoped>
div {
  -webkit-text-stroke: 1px black;
}
</style>
