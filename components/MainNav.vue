<script setup lang="ts">
import { cn } from "@/lib/utils";
import { type Category } from "@/types";

interface MainNavProps {
  data: Category[] | null;
}

const props = defineProps<MainNavProps>();
const { data } = toRefs(props);

const route = useRoute();

const routes = computed(() => {
  const pathname = route.fullPath;

  if (!data.value) return [];

  return data?.value.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
});
</script>

<template>
  <nav class="mx-6 flex items-center space-x-4 lg:space-x-6">
    <NuxtLink
      v-for="route in routes"
      :key="route.href"
      :to="route.href"
      :class="
        cn(
          'text-sm font-medium transition-colors hover:text-black',
          route.active ? 'text-black text-bold' : 'text-neutral-500'
        )
      "
    >
      {{ route.label }}
    </NuxtLink>
  </nav>
</template>
