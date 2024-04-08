<script setup lang="ts">
import { cn } from "@/lib/utils";

interface IconButtonProps {
  className?: string;
}
const { className } = defineProps<IconButtonProps>();
</script>

<template>
  <button
    :class="
      cn(
        'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
        className
      )
    "
  >
    <slot />
  </button>
</template>
