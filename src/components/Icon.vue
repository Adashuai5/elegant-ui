<template>
  <svg :class="{ [`svg-icon ${className}`]: className }" aria-hidden="true">
    <use :xlink:href="`#icon-${iconLink}`" />
  </svg>
</template>

<script lang="ts">
import "//at.alicdn.com/t/font_2113925_ne3hehcbrk.js";
export default {
  name: "Icon",
  props: {
    iconLink: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
