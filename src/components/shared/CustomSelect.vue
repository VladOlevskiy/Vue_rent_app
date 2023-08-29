<template lang="">
  <select
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="custom-select"
  >
    <option
      v-for="item in formattedItems"
      :value="item.value"
      :key="item.value"
      :selected="item.selected"
    >
      {{ item.label }}
    </option>
  </select>
</template>
<script>
export default {
  name: "CustomSelect",
  props: { items: { type: Array, required: true }, modelValue: String },
  emits: ["update:modelValue"],
  computed: {
    formattedItems() {
      return this.items.map((item) => {
        if (typeof item === "object") {
          return item;
        } else {
          return {
            value: item,
            label: item,
          };
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables";

.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>
