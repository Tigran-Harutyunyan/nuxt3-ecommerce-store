<script setup lang="ts">
interface CartItemInfoProps {
  product: Record<string, any>;
}

const { product } = defineProps<CartItemInfoProps>();
</script>

<template>
  <div>
    <div class="flex justify-between">
      <p class="text-sm font-semibold text-black">
        {{ product.name }}
      </p>
    </div>

    <div class="mt-1 flex text-sm">
      <p class="text-gray-500">{{ product.color }}</p>
      <p class="ml-4 border-l border-gray-200 pl-4 text-gray-500">
        {{ product.size }}
      </p>
    </div>
    <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
  </div>
</template>
