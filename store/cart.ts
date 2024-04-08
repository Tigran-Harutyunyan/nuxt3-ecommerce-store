import { defineStore } from "pinia";
import { type Product } from '@/types';
import { toast } from 'vue-sonner';

export const useCart = defineStore("cart", () => {
  const items = ref<Product[]>([]);

  const addItem = (data: Product) => {
    const existingItem = items.value.find((item) => item.id === data.id);

    if (existingItem) {
      toast('Item already is in cart.');
      return
    }

    items.value = [...items.value, data]
    toast.success('Item added to cart.');
  }

  const removeItem = (id: string) => {
    items.value = items.value.filter((item) => item.id !== id)
    toast.success('Item removed from cart.');
  }

  const removeAll = () => {
    items.value = [];
  };

  const loadFromStorage = () => {
    items.value = [];
  };

  const saveToStorage = () => {
    items.value = [];
  };


  return {
    items,
    addItem,
    removeItem,
    removeAll
  };
});
