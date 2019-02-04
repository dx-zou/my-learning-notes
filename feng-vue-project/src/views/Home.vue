<template>
  <div class="home">
    <home-header/>
    <home-nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeHeader.vue";
import HomeNav from "@/components/HomeNav.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeNav
  }
};
</script>

<style lang="less" scoped>
    .home {
      width: 100%;
      height: 100%;
      min-width: 320px;
      max-width: 640px;
      margin: 0 auto;
    }   
</style>
