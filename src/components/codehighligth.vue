<template>
  <div>
    <code-highlight language="javascript">
      {{ codigo }}
    </code-highlight>
  </div>
</template>

<script>
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
export default {
  name: "ComponentExample",
  components: {
    CodeHighlight,
  },
  props: ["code"],
  computed: {
    codigo() {
      return this.code;
    },
  },
};
</script>
