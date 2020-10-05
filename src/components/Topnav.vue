<template>
  <div class="topnav">
    <div class="logo">
      <SvgIcon iconLink="logo" />
      <span>legant</span>
    </div>
    <ul class="menu">
      <li>菜单</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Topnav",
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
