<script setup lang="ts">
import type { Product, Billboard as BillboardType } from "@/types";
import IndexLoader from "@/components/loaders/IndexLoader.vue";

const { data: billboards } = useFetch<BillboardType[]>("/api/billboards", {
  server: true,
});

const { data: products, pending } = useFetch<Product[]>(
  "/api/products?isFeatured=true",
  {
    server: true,
  }
);

const billboard = computed(() => {
  if (billboards.value && Array.isArray(billboards.value)) {
    return billboards.value[0];
  }
  return {};
});
</script>

<template>
  <Container>
    <IndexLoader v-if="pending && !products" />
    <div class="space-y-10 pb-10">
      <Billboard :data="billboard" />
      <div class="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" :items="products" />
      </div>
    </div>
  </Container>
</template>
