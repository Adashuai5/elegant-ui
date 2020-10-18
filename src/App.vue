<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const width = ref(document.documentElement.clientWidth);
    const menuVisible = ref(width.value >= 500);

    window.onresize = () => {
      width.value = document.documentElement.clientWidth;
      menuVisible.value = width.value >= 500;
    };

    provide("menu-visible", menuVisible);
  },
};
</script>
