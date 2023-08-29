<template lang="">
  <Container>
    <slot name="title"></slot>
    <div class="apartments-list">
      <ApartmentsItem
        class="apartments-list__item"
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :description="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
      />
    </div>
  </Container>
</template>

<script>
import ApartmentsItem from "./ApartmentsItem.vue";
import Container from "../shared/Container.vue";

export default {
  name: "ApartmentsList",
  components: { ApartmentsItem, Container },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  &__item {
    margin-bottom: 30px;
  }
}
</style>
