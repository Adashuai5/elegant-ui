<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">
      <SvgIcon iconLink="logo" />
      <span v-if="menuVisible">legant</span>
    </div>
    <ul class="menu">
      <li>菜单</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  name: "Topnav",
  setup() {
    const menuVisible = inject<Ref<boolean>>("menu-visible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {
      menuVisible,
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #ddf0ed;
.topnav {
  background: $color;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    color: #1296db;
    font-weight: 600;
    font-style: italic;
    line-height: 16px;
    cursor: pointer;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
