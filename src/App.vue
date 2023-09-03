<template>
  <div class="app-container">
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import apartments from "./components/apartment/apartments";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  font-family: Montserrat;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  flex-grow: 1;
  padding-top: 120px;
}
</style>
