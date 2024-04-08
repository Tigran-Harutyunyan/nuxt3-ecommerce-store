<script setup lang="ts">
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  disabled: false,
});

const { className, disabled, type = "button" } = toRefs(props);
</script>

<template>
  <button
    :type="type"
    :class="
      cn(
        `
        w-auto 
        rounded-full 
        bg-black
        border
        border-transparent
        px-5 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
      `,
        disabled && 'opacity-75 cursor-not-allowed',
        className
      )
    "
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
