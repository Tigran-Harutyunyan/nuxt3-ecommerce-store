<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import Filter from "@/components/category/Filter.vue";
import { Plus, X } from "lucide-vue-next";
import { Dialog, DialogPanel } from "@headlessui/vue";

import type { Color, Size } from "@/types";

interface MobileFiltersProps {
  sizes: Size[] | null;
  colors: Color[] | null;
}
const { sizes, colors } = defineProps<MobileFiltersProps>();
const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
};

const openModal = () => {
  isOpen.value = true;
};
</script>

<template>
  <Button @click="openModal" class="flex items-center gap-x-2 lg:hidden">
    Filters
    <Plus :size="20" />
  </Button>

  <Dialog
    :open="isOpen"
    as="div"
    class="relative z-40 lg:hidden"
    @close="closeModal"
  >
    <div class="fixed inset-0 bg-black bg-opacity-25" />

    <div class="fixed inset-0 z-40 flex">
      <DialogPanel
        class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
      >
        <div class="flex items-center justify-end px-4">
          <IconButton @click="closeModal">
            <X :size="15" />
          </IconButton>
        </div>

        <div class="p-4">
          <Filter
            valueKey="sizeId"
            name="Sizes"
            :data="sizes"
            @close="closeModal"
          />
          <Filter
            valueKey="colorId"
            name="Colors"
            :data="colors"
            @close="closeModal"
          />
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
