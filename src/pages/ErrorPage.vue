<template lang="">
  <selector class="error">
    <h1 class="error__title">Page not found</h1>
  </selector>
</template>
<script>
export default {
  name: "ErrorPage",
};
</script>
<style lang="scss" scoped>
.error {
  &__title {
    font-size: 60px;
    text-align: center;
  }
}
</style>
