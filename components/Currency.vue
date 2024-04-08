<script setup lang="ts">
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const props = withDefaults(defineProps<CurrencyProps>(), {
  value: 0,
});

const { value } = toRefs(props);
</script>

<template>
  <div class="font-semibold">{{ formatter.format(Number(value)) }}</div>
</template>
