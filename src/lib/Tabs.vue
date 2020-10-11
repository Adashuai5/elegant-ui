<template>
  <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
  <component v-for="(c, index) in defaults" :key="index" :is="c"></component>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  components: { Tab },
  setup(props, context) {
    const defaults = { ...context }.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 的内部嵌套组件必须为 Tab！");
      }
    });
    const titles = defaults.map((tag) => tag.props.title);
    return { defaults, titles };
  },
};
</script>

<style lang="scss"></style>
