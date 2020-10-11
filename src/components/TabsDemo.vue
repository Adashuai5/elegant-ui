<template>
  <h1>Tabs 示例</h1>
  <h3>示例1</h3>
  <Tabs>
    <Tab title="导航1">tab 1</Tab>
    <Tab title="导航2">tab 2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  components: { Tab, Tabs },
};
</script>

<style lang="scss" scoped></style>
