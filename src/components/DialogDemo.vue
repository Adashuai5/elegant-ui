<template>
  <h1>Dialog 示例</h1>
  <h3>示例1</h3>
  <Button @click="toggle">点击打开 Dialog</Button>
  <Dialog
    v-model:visible="visible"
    teleportTo="#app"
    :closeOnClickOverlay="false"
    :ok="ok"
    :cancel="cancel"
  >
    <template v-slot:title><b>标题</b>
    </template>
    <template v-slot:content>
      <p>第一行字</p>
      <p>第二行字</p>
    </template>
  </Dialog>
</template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      console.log("ok");
      return true;
    };
    const cancel = () => {
      console.log("cancel");
    };
    return {
      visible,
      toggle,
      ok,
      cancel,
    };
  },
};
</script>