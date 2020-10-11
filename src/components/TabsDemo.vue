<template>
  <h1>Tabs 示例</h1>
  <h3>示例1</h3>
  <Tabs v-model:selected="x">
    <Tab title="导航1">tab 1</Tab>
    <Tab title="导航2">tab 2</Tab>
  </Tabs>
</template>

<script lang="ts">
import { ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: { Tab, Tabs },
  setup() {
    const x = ref("导航1");
    return { x };
  },
};
</script>

<style lang="scss" scoped></style>
