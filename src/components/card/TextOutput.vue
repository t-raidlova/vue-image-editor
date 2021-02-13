<template>
  <p :style="cssObject">{{ section.userInput }}</p>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    section: Object,
  },
  setup(props) {
    const cssObject = computed(() => {
      return {
        display: "flex",
        border: "1px solid black",
        fontFamily: props.section.fontFamily,
        fontSize: props.section.fontSize,
        color: props.section.color,
        height: props.section.height + "px",
        justifyContent: props.section.justifyContent,
        alignItems: props.section.alignItems,
      };
    });
    return { cssObject };
  },
};
</script>
