<script setup lang="ts">
import type { Product, Category, Size, Color } from "@/types";
import Filter from "@/components/category/Filter.vue";
import MobileFilters from "@/components/category/MobileFilters.vue";
import CategoryLoader from "@/components/loaders/CategoryLoader.vue";

const routeParams = useRoute().params;

const queryParams = computed(() => {
  const routeQuery = useRoute().query;
  return {
    colorId: routeQuery.colorId,
    sizeId: routeQuery.sizeId,
    categoryId: routeParams.categoryId,
  };
});

const { data: sizes } = useFetch<Size[]>("/api/sizes", {
  server: true,
});

const { data: colors } = useFetch<Color[]>("/api/colors", {
  server: true,
});

const { data: category } = useFetch<Category>(
  `/api/category/${routeParams.categoryId}`,
  {
    server: true,
  }
);

const {
  data: products,
  refresh,
  pending,
} = await useAsyncData<Product[]>(
  "products",
  () =>
    $fetch("/api/products", {
      query: queryParams.value,
    }),
  { watch: [queryParams.value] }
);

watch(
  () => useRoute().fullPath,
  async () => {
    refresh();
  }
);
</script>

<template>
  <CategoryLoader v-if="pending && !products" />
  <div class="bg-white">
    <Container>
      <Billboard :data="category?.billboard" />
      <div class="px-4 sm:px-6 lg:px-8 pb-24">
        <div class="lg:grid lg:grid-cols-5 lg:gap-x-8">
          <MobileFilters :sizes="sizes" :colors="colors" />
          <div class="hidden lg:block">
            <Filter valueKey="sizeId" name="Sizes" :data="sizes" />
            <Filter valueKey="colorId" name="Colors" :data="colors" />
          </div>
          <div class="mt-6 lg:col-span-4 lg:mt-0" v-if="products !== null">
            <NoResults v-if="products.length === 0" />
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              v-else
            >
              <ProductCard
                v-for="item in products"
                :key="item.id"
                :data="item"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
