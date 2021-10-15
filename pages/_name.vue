<script>
import { computed, useRoute } from '@nuxtjs/composition-api'

export default {
  setup() {
    const route = useRoute()
    const name = computed(() => route.value.params.name)

    return {
      bannerName:
        'Graphic' + name.value.charAt(0).toUpperCase() + name.value.slice(1),
    }
  },
  async asyncData({ $content, params }) {
    const platform = await $content(params.name).fetch()

    return {
      platform,
    }
  },
  head() {
    return {
      title: this.platform.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.platform.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.platform.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.platform.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.platform.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.platform.description,
        },
      ],
    }
  },
}
</script>

<template>
  <div class="p-4 lg:p-16">
    <article
      class="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl lg:mt-16"
    >
      <header class="space-y-6 lg:space-y-16">
        <component :is="bannerName" v-if="platform.graphic" class="mx-auto h-64" />
        <h1>{{ platform.title }}</h1>
      </header>
      <NuxtContent :document="platform" />
    </article>
  </div>
</template>
