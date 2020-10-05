<template>
  <div class="topnav">
    <SvgIcon iconLink="returns" className="toggleMenu" @click="toggleMenu" />
    <router-link class="logo" to="/">
      <SvgIcon iconLink="logo" />
      <span class="hide">legant</span>
    </router-link>
    <ul class="menu hide">
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    color: #1296db;
    font-weight: 600;
    font-style: italic;
    line-height: 16px;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleMenu {
    display: none;
  }
  @media (max-width: 500px) {
    > .toggleMenu {
      width: 1.5em;
      height: 1.5em;
      display: inline-block;
      position: absolute;
      left: 1em;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    .hide {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
