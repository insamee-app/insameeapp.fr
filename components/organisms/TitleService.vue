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
  <div>
    <TitleLink
      :state="state"
      :name="name"
      :index="index"
      @active="$emit('active', $event)"
    />
    <component :is="componentName" :state="state" />
  </div>
</template>
