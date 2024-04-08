<script setup lang="ts">
import { useAuth } from "vue-clerk";
import { toast } from "vue-sonner";
import Currency from "@/components/Currency.vue";
import { Button } from "@/components/ui/button";

import { useCart } from "@/store/cart";

const { items } = storeToRefs(useCart());

const { removeAll } = useCart();

const { userId } = useAuth();

const totalPrice = computed(() => {
  if (!items.value) return 0;
  return items.value.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);
});

const onCheckout = async () => {
  if (!userId.value) {
    toast.info("Please sign in first");
    navigateTo("/sign-in");
  }

  const response = $fetch("/api/checkout", {
    method: "post",
    body: {
      productIds: items.value.map((item) => item.id),
    },
  });

  if (response?.data) {
    window.location = response.data.url;
  }
};

watch(
  () => useRoute().fullPath,
  () => {
    if (useRoute().query.success) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (useRoute().query.canceled) {
      toast.error("Something went wrong.");
    }
  }
);
</script>

<template>
  <ClientOnly>
    <div
      class="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 class="text-lg font-medium text-gray-900">Order summary</h2>
      <div class="mt-6 space-y-4">
        <div
          class="flex items-center justify-between border-t border-gray-200 pt-4"
        >
          <div class="text-base font-medium text-gray-900">Order total</div>
          <Currency :value="totalPrice" />
        </div>
      </div>
      <Button
        @click="onCheckout"
        :disabled="items.length === 0"
        class="w-full mt-6"
      >
        Checkout
      </Button>
    </div>
  </ClientOnly>
</template>
