<script>
export default {
  name: 'AppSubtitle',
  props: {
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="hidden lg:flex flex-row items-center space-x-4">
    <div class="h-[1px] w-9 bg-gray-500"></div>
    <div class="rounded p-4 backdrop-blur-sm bg-white bg-opacity-20">
      <span class="text-gray-700 text-base font-normal mix-blend-multiply">
        {{ subtitle }}
      </span>
    </div>
  </div>
</template>
