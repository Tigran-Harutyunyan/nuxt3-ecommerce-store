import { defineStore } from "pinia";
import { type Product } from '@/types';
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();

export const useCart = defineStore("cart", () => {
  const items = ref<Product[]>([]);

  const totalPrice = computed(() => {
    if (!items.value) return 0;

    return items.value.reduce((total, item) => {
      return total + Number(item.price);
    }, 0);
  });

  const addItem = (data: Product) => {
    const existingItem = items.value.find((item) => item.id === data.id);

    if (existingItem) {
      toast({
        title: 'Item already is in cart.',
        variant: "default",
      });
      return
    }

    items.value = [...items.value, data];
    toast({
      title: 'Item added to cart.',
      variant: "default",
    });
  }

  const removeItem = (id: string) => {
    items.value = items.value.filter((item) => item.id !== id)
    toast({
      title: 'Item removed from cart.',
      variant: "default",
    });
  }

  const removeAll = () => {
    items.value = [];
  };

  return {
    items,
    totalPrice,
    addItem,
    removeItem,
    removeAll
  };
}, {
  persist: {
    storage: persistedState.localStorage,
  },
});
