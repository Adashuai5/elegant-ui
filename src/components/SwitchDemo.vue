<template>
  <div>
    <Switch :value="checked" @input="checked = $event" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
  setup() {
    const checked = ref(false);
    return {
      checked,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

