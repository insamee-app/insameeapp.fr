<script>
export default {
  name: 'TitleService',
  props: {
    name: {
      type: String,
      required: true,
    },
    subtitle: {
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
  setup(props) {
    const name = props.name
    const componentName =
      'Animation' + name.charAt(0).toUpperCase() + name.slice(1)

    return {
      componentName,
    }
  },
}
</script>

<template>
  <li>
    <NuxtLink :to="{ name: 'name', params: { name } }">
      <TitleLink
        :state="state"
        :name="name"
        :subtitle="subtitle"
        :index="index"
        @active="$emit('active', $event)"
      />
      <component :is="componentName" :state="state" />
    </NuxtLink>
  </li>
</template>
