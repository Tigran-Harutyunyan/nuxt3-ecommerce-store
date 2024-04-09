<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";
import Currency from "@/components/Currency.vue";
import { Button } from "@/components/ui/button";

const { toast } = useToast();

import { useCart } from "@/store/cart";

const { items, totalPrice } = storeToRefs(useCart());

const { removeAll } = useCart();

const loading = ref(false);

const onCheckout = async () => {
  loading.value = true;

  const response = await $fetch("/api/checkout", {
    method: "post",
    body: {
      productIds: items.value.map((item) => item.id),
    },
  });

  if (response?.url) {
    window.location = response.url;
  }
};

onMounted(() => {
  const query = useRoute().query;

  if (query.success) {
    toast({
      title: "Payment completed!",
      variant: "default",
    });

    removeAll();

    navigateTo("/");
  }

  if (query.canceled) {
    toast({
      title: "Something went wrong.",
      variant: "destructive",
    });
  }
});
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
        {{ loading ? "Redirecting..." : "Checkout" }}
      </Button>
    </div>
  </ClientOnly>
</template>
