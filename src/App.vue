<script>
import AppHeader from "./components/AppHeader.vue";
import AppNav from "./components/AppNav.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppNav,
    AppMain
  },

  methods: {
    goTop() {
      window.scrollTo({
      top: 0,
      behavior: "smooth",
      });
    }
  }
  
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppNav></AppNav>
  <AppMain></AppMain>

  <div class="go-top" @click="goTop()">
    <i class="fa-solid fa-chevron-up"></i>
  </div>
</template>

<style lang="scss">

@use './styles/general' as *;

.go-top {
  position: fixed;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  background-color: white;
  padding: 10px 14px;

  .fa-chevron-up {
    color: black;
  }
}

</style>