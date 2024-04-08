<script setup lang="ts">
import { type Product } from "@/types";

interface ProductListProps {
  title: string;
  items: Product[] | undefined | null;
}
const props = defineProps<ProductListProps>();
const { title, items } = toRefs(props);
</script>

<template>
  <div class="space-y-4" v-if="items">
    <h3 class="font-bold text-3xl">{{ title }}</h3>
    <NoResults v-if="items.length === 0" />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <ProductCard v-for="item in items" :key="item.id" :data="item" />
    </div>
  </div>
</template>
