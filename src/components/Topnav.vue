<template>
  <div class="topnav">
    <Icon iconLink="returns" className="toggleMenu" @click="toggleMenu" />
    <router-link class="logo" to="/">
      <Icon iconLink="logo" className="logoE" />
      <span class="hide">legant</span>
    </router-link>
    <ul class="menu hide">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
import { inject, Ref } from "vue";
export default {
  name: "Topnav",
  components: { Icon },
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
$color: #1296d8;

.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 20;
  color: $color;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    font-weight: 600;
    font-style: italic;
    line-height: 16px;

    > .logoE {
      width: 1.3em;
      height: 1.3em;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;

      &:hover,
      &:focus {
        color: darken($color, 10%);
      }
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
