<template>
  <div class="topnav">
    <SvgIcon iconLink="logo" className="logo" />
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
  > .logo {
    max-width: 6em;
    margin-right: auto;
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
