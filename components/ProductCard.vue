<script setup lang="ts">
import { IconButton } from "@/components/ui/icon-button";
import Currency from "@/components/Currency.vue";

import type { Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-vue-next";
import { useCart } from "@/store/cart";
import { useModals } from "@/store/modals";

const cart = useCart();
const { onOpen } = useModals();

interface ProductCard {
  data: Product;
}

const { data } = defineProps<ProductCard>();

const router = useRouter();

const handleClick = () => {
  router.push(`/product/${data?.id}`);
};
</script>

<template>
  <div
    @click="handleClick"
    class="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
  >
    <div
      class="flex items-center aspect-square rounded-xl relative group-hover:opacity-75"
    >
      <NuxtImg
        :src="data.images?.[0]?.url"
        alt=""
        fill
        class="max-h-[250px] md:max-h-[auto] object-cover rounded-md mx-auto"
      />
      <div
        class="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5"
      >
        <div class="flex gap-x-6 justify-center">
          <IconButton @click="onOpen(data)">
            <Expand :size="20" class="text-gray-600" />
          </IconButton>

          <IconButton @click="cart.addItem(data)">
            <ShoppingCart :size="20" class="text-gray-600" />
          </IconButton>
        </div>
      </div>
    </div>

    <div>
      <p class="font-semibold line-clamp-2">{{ data.name }}</p>
      <p class="text-sm text-gray-500">{{ data.category?.name }}</p>
    </div>

    <div class="flex items-center justify-between">
      <Currency :value="data?.price" />
    </div>
  </div>
</template>
