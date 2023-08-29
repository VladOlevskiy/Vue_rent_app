<template lang="">
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput v-model="price" placeholder="Ціна, від" />
    <Button type="submit" class="form__submit">Підбір житла</Button>
  </form>
</template>
<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import Button from "../shared/Button.vue";

export default {
  name: "ApartmentFilterForm",
  components: {
    CustomInput,
    CustomSelect,
    Button,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "Місто", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", { city: this.city, price: this.price });
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>
