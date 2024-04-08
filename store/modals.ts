import { defineStore } from "pinia";
export type ModalType = "preview";
import type { Product } from "@/types";

export const useModals = defineStore("modals", () => {
  const type = ref<ModalType | null>(null);
  const isOpen = ref(false);
  const data = ref<Product>();

  function onOpen(prod: Product) {
    isOpen.value = true;
    data.value = prod;
  }

  function onClose() {
    isOpen.value = false;
  }

  return {
    isOpen,
    type,
    data,
    onOpen,
    onClose,
  };
});
