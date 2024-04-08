<script setup lang="ts">
import { ShoppingCart } from "lucide-vue-next";

import Currency from "@/components/Currency.vue";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";
import { useCart } from "@/store/cart";

const cart = useCart();

interface InfoProps {
  data: Product | null;
}

const props = defineProps<InfoProps>();

const { data } = toRefs(props);
</script>

<template>
  <div v-if="data">
    <h1 class="text-3xl font-bold text-gray-900">{{ data?.name }}</h1>
    <div class="mt-3 flex items-end justify-between">
      <p class="text-2xl text-gray-900">
        <Currency :value="data?.price" />
      </p>
    </div>
    <hr class="my-4" />
    <div class="flex flex-col gap-y-6">
      <div class="flex items-center gap-x-4">
        <h3 class="font-semibold text-black">Size:</h3>
        <div>
          {{ data?.size?.value }}
        </div>
      </div>
      <div class="flex items-center gap-x-4">
        <h3 class="font-semibold text-black">Color:</h3>
        <div
          class="h-6 w-6 rounded-full border border-gray-600"
          :style="{ backgroundColor: data?.color?.value }"
        />
      </div>
    </div>
    <div class="mt-10 flex items-center gap-x-3">
      <Button @click="cart.addItem(data)" class="flex items-center gap-x-2">
        Add To Cart
        <ShoppingCart :size="20" />
      </Button>
    </div>
  </div>
</template>
