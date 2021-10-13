<script>
export default {
  name: 'TitleTeam',
  setup(_, { emit }) {
    function mouseEnterHandler(e) {
      if (e.pointerType === 'touch') return

      emit('active', 'team')
    }

    function mouseLeaveHandler(e) {
      if (e.pointerType === 'touch') return

      emit('active', false)
    }

    return {
      mouseEnterHandler,
      mouseLeaveHandler,
    }
  },
}
</script>

<template>
  <div @pointerenter="mouseEnterHandler" @pointerleave="mouseLeaveHandler">
    <h1 class="text-5xl font-bold">TEAM</h1>
  </div>
</template>
