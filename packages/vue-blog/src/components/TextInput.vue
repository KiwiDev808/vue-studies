<template>
  <div>
    <label :for="label">{{ label }}</label>
    <textarea
      v-if="isTextArea"
      :id="label"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <input
      v-else
      type="text"
      :id="label"
      :value="value"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, required: true },
    type: { type: String, required: false },
    label: { type: String, required: true },
    placeholder: { type: String, required: false, default: '' },
  },
  computed: {
    isTextArea() {
      if (this?.type === 'textarea') return true
      return false
    },
  },
}
</script>

<style scoped></style>
