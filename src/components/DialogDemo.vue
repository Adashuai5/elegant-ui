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
    <template v-slot:title><b>标题</b> </template>
    <template v-slot:content>
      <p>第一行字</p>
      <p>第二行字</p>
    </template>
  </Dialog>
  <h3>示例2</h3>
  <Button @click="showDialog">直接打开 Dialog</Button>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref, h } from "vue";
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

    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "内容",
        teleportTo: "body",
        closeOnClickOverlay: true,
        ok,
        cancel,
      });
    };
    return {
      visible,
      toggle,
      ok,
      cancel,
      showDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 20px 0;
}
</style>