<script setup lang="ts">
import type { Product } from "@/types";
import ProductLoader from "@/components/loaders/ProductLoader.vue";
const route = useRoute();

const { data: product, pending } = useFetch<Product>(
  `/api/product/${route.params.productId}`,
  {
    server: true,
  }
);

const { data: relatedProducts } = useFetch<Product[]>(
  `/api/product/${route.params.productId}/related`,
  {
    server: true,
  }
);
</script>

<template>
  <div class="bg-white">
    <ProductLoader v-if="pending && !product" />
    <Container>
      <div class="px-4 py-10 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery :images="product?.images || []" />
          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info :data="product" />
          </div>
        </div>
        <hr class="my-10" />
        <ProductList title="Related Items" :items="relatedProducts" />
      </div>
    </Container>
  </div>
</template>
