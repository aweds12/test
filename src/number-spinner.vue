<template>
  <div class="wrapper" :style="`--maincolor: ${color}`">
    <button
      v-html="ChevronLeft"
      :style="`--size: ${spinnerSize}px`"
      @click="value -= diffBy"
    ></button>
    <input
      v-model="value"
      type="number"
      placeholder="0"
      :min="min"
      :max="max"
      :minlength="minLength"
      :maxlength="maxLength"
      :style="`--size: ${spinnerSize}px`"
    />
    <button
      v-html="ChevronRight"
      :style="`--size: ${spinnerSize}px`"
      @click="value += diffBy"
    ></button>
  </div>
</template>

<script setup lang="ts">
import type { InputHTMLAttributes, PropType } from "vue";

type sizeProps = "xs" | "sm" | "md" | "lg" | "xl";

const props = defineProps({
  size: {
    type: String as PropType<sizeProps>,
    default: "xl",
  },
  color: { type: String, default: "gray" },
  min: Number as PropType<InputHTMLAttributes["min"]>,
  max: Number as PropType<InputHTMLAttributes["max"]>,
  minLength: Number as PropType<InputHTMLAttributes["minlength"]>,
  maxLength: Number as PropType<InputHTMLAttributes["maxlength"]>,
  diffBy: { type: Number, default: 1 },
});
const value = defineModel({
  type: Number,
  required: true,
});

const spinnerSize = computed(() => {
  switch (props.size) {
    case "xs":
      return 16;
    case "sm":
      return 18;
    case "md":
      return 20;
    case "lg":
      return 22;
    case "xl":
      return 24;
  }
});

const ChevronLeft = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="${props.color}"><path fill-rule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" /></svg>`;
const ChevronRight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="${props.color}"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>`;
</script>

<style scoped>
:root {
  --maincolor: gray;
}
.wrapper {
  max-width: 100%;
  display: flex;
  align-items: center;
  border: thin solid var(--maincolor);
  border-radius: 4px;
}
.wrapper button {
  height: var(--size);
  width: var(--size);
}
.wrapper button svg {
  height: 100%;
  width: 100%;
}
.wrapper input[type="number"] {
  height: var(--size);
  width: 100%;
  flex: 1 1 0%;
  border-left: thin solid var(--maincolor);
  border-right: thin solid var(--maincolor);
  padding: 0 6px;
}
.wrapper input[type="number"]:focus {
  outline: none;
}
.wrapper input[type="number"]::-webkit-inner-spin-button,
.wrapper input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
}
</style>
