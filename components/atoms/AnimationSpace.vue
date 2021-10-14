<script>
export default {
  name: 'AnimationSpace',
}
</script>

<template>
  <div
    class="
      pointer-events-none
      absolute
      w-full
      h-full
      top-0
      left-0
      z-[-1]
      overflow-hidden
    "
  >
    <slot></slot>
  </div>
</template>
