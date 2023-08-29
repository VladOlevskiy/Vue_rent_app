<template>
  <div>
    <p>{{ text }}</p>
    <Container>
      <ApartmentsFilterForm class="apartments-filter" @submit="logger" />
    </Container>
    <ApartmentsList :items="apartments">
      <template v-slot:title> Доступні вільні апартаменти </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsFilterForm from "./components/apartment/ApartmentsFilterForm.vue";
import Container from "./components/shared/Container.vue";

export default {
  name: "App",
  components: { ApartmentsList, ApartmentsFilterForm, Container },
  data() {
    return {
      text: "",
      apartments,
    };
  },
  methods: {
    logger(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  margin-top: 60px;
  text-align: center;
  font-family: Montserrat;
}
.apartments-filter {
  margin-bottom: 40px;
}
</style>
