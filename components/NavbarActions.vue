<script setup lang="ts">
import { ShoppingBag } from "lucide-vue-next";
import Button from "@/components/ui/Button.vue";
import { useCart } from "@/store/cart";

const cart = useCart();
</script>

<template>
  <div class="ml-auto flex items-center gap-x-4">
    <Button
      @click="navigateTo('/cart')"
      className="flex items-center rounded-full bg-black px-4 py-2"
    >
      <ShoppingBag :size="20" color="white" />
      <span class="ml-2 text-sm font-medium text-white">
        {{ cart.items.length }}
      </span>
    </Button>
  </div>
</template>
