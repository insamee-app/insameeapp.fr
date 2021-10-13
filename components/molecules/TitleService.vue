<script>
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
      validator: (value) => ['active', 'first', 'inactive'].includes(value),
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

    return {
      cutName,
      mouseEnterHandler,
      mouseLeaveHandler,
    }
  },
}
</script>

<template>
  <h2
    class="flex flex-row text-5xl tracking-wide font-bold text-white"
    @pointerenter="mouseEnterHandler"
    @pointerleave="mouseLeaveHandler"
  >
    <span class="capitalize w-full">
      {{ cutName.firstLetter }}
    </span>
    <span>
      {{ cutName.otherLetter }}
    </span>
    &nbsp;{{ state }}
  </h2>
</template>

<style scoped>
h2 {
  -webkit-text-stroke: 1px black;
}
</style>
