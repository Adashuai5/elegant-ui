<template>
  <h1>Button 示例</h1>
  <h3>示例1</h3>
  <div>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick">你好</Button>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("onClick");
    };
    return {
      onClick,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

