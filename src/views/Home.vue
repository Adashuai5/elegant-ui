<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>Elegant UI</h1>
      <h1>一个优雅的 UI 组件库</h1>
      <p class="actions">
        <a href="//github.com/Adashuai5/elegant-ui/">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$color: #c7ffec;
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $color;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
