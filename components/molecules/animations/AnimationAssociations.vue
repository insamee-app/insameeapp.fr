<script>
import { ref, onMounted, watch } from '@nuxtjs/composition-api'
import { useMotion } from '@vueuse/motion'

export default {
  name: 'AnimationEvenement',
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
        y: -100,
      },
      active: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 400,
        },
      },
    })

    onMounted(() => {
      watch(
        () => props.state,
        (nVal) => {
          if (nVal === 'active') {
            blobMotion.variant.value = 'active'
          } else {
            blobMotion.variant.value = 'initial'
          }
        }
      )
    })
    return {
      blob,
    }
  },
}
</script>

<template>
  <AnimationSpace>
    <div
      class="
        absolute
        bottom-1/2
        left-0
        transform
        translate-y-2/3
        -translate-x-2/3
        z-0
      "
    >
      <BlobAssociations ref="blob" />
    </div>
  </AnimationSpace>
</template>
