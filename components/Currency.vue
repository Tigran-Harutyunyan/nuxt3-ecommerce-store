<script setup lang="ts">
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const { value } = withDefaults(defineProps<CurrencyProps>(), {
  value: 0,
});
</script>

<template>
  <div class="font-semibold">{{ formatter.format(Number(value)) }}</div>
</template>
