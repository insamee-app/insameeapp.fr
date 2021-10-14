<script>
import { ref, onMounted, watch } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default {
  name: 'AnimationMee',
  props: {
    state: {
      type: String,
      required: true,
      validator: (value) =>
        ['active', 'first', 'inactive', 'normal'].includes(value),
    },
  },
  setup(props) {
    const blob = ref()
    const blobMotion = useMotion(blob, {
      initial: {
        opacity: 0,
        x: -150,
        y: 150,
      },
      active: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 300,
        },
      },
    })

    const graphic = ref()
    const graphicMotion = useMotion(graphic, {
      initial: {
        opacity: 0,
        x: 150,
        transition: {
          duration: 100,
          ease: 'easeIn',
        },
      },
      active: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 500,
          ease: 'easeOut',
        },
      },
    })

    onMounted(() => {
      watch(
        () => props.state,
        (nVal) => {
          if (nVal === 'active') {
            graphicMotion.variant.value = 'active'
            blobMotion.variant.value = 'active'
          } else {
            graphicMotion.variant.value = 'initial'
            blobMotion.variant.value = 'initial'
          }
        }
      )
    })

    return {
      blob,
      graphic,
    }
  },
}
</script>

<template>
  <AnimationSpace>
    <div
      class="
        absolute
        bottom-0
        left-0
        transform
        -translate-x-1/2
        translate-y-[60%]
        z-0
      "
    >
      <BlobMee ref="blob" />
    </div>
    <div
      class="absolute right-0 top-0 transform translate-y-1/2 translate-x-[30%]"
    >
      <GraphicMee ref="graphic" />
    </div>
  </AnimationSpace>
</template>
