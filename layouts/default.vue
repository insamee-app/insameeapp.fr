<script>
export default {}
</script>

<template>
  <div>
    <header
      class="
        absolute
        top-0
        right-0
        left-0
        h-16
        px-4
        md:px-16
        flex flex-row
        justify-between
        items-center
        text-xl
        z-20
      "
    >
      <NuxtLink :to="{ name: 'index' }">InsameeApp</NuxtLink>
      <NuxtLink
        :to="{ name: 'name', params: { name: 'about' } }"
        class="text-gray-500 font-segoe font-semibold text-lg"
      >
        À propos
      </NuxtLink>
    </header>
    <Nuxt />
  </div>
</template>
