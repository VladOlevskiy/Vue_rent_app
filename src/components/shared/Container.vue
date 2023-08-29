<template lang="">
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "container",
};
</script>
<style lang="scss" scoped>
.class {
  max-width: 1110px;
  margin: 0 auto;
}
</style>
