<template>
  <div class="condition">
    <label v-for="option in options" :key="option.id">
      <input type="radio" :value="option.value" :name="name" :checked="value === option.value" @input="updateValue">
      <span>{{ option.label }}</span>
    </label>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TodoFilter",
    props: {
      options: Array,
      name: String,
      value: Number
    },
    methods: {
      updateValue(e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>

<style scoped>
  .condition label {
    padding-left: .3em;
  }
</style>
