<script>
import AppHeader from "./components/AppHeader.vue";
import AppNav from "./components/AppNav.vue";

export default {
  components: {
    AppHeader,
    AppNav
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppNav></AppNav>
</template>

<style lang="scss">

@use './styles/general' as *;

</style>