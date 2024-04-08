<script setup lang="ts">
import Summary from "@/components/cart/Summary.vue";
import CartItem from "@/components/cart/CartItem.vue";

import { useCart } from "@/store/cart";

const { items } = storeToRefs(useCart());
</script>

<template>
  <div class="bg-white">
    <Container>
      <div class="px-4 py-16 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-black">Shopping Cart</h1>
        <div class="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div class="lg:col-span-7" v-if="items">
            <p v-if="items.length === 0" class="text-neutral-500">
              No items added to cart.
            </p>
            <ul v-else>
              <CartItem v-for="item in items" :key="item.id" :data="item" />
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  </div>
</template>
