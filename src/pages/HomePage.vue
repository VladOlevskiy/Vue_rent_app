<template>
  <main class="homepage">
    <Container>
      <ApartmentsFilterForm class="apartments-filter" @submitEvent="filter" />
      <p v-if="!filteredApartments.length">
        Нажаль по вашому запиту немає варіантів
      </p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:title> Доступні вільні апартаменти </template>
      </ApartmentsList>
    </Container>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import apartments from "../components/apartment/apartments";
import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm.vue";
import Container from "../components/shared/Container.vue";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsFilterForm,
    Container,
  },
  data() {
    return {
      apartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    filter(filterValue) {
      this.filters.city = filterValue.city;
      this.filters.price = filterValue.price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
