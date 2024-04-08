<script setup lang="ts">
import qs from "query-string";
import Button from "@/components/ui/Button.vue";
import { cn } from "@/lib/utils";
import type { Color, Size } from "@/types";

interface FilterProps {
  data: (Size | Color)[] | null;
  name: string;
  valueKey: string;
}

const router = useRouter();

const { data, name, valueKey } = defineProps<FilterProps>();

const query = computed(() => {
  return useRoute().query;
});

const selectedValue = computed(() => {
  return query.value[valueKey];
});

const onClick = (id: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  let url = `/category/${useRoute().params.categoryId}?`;
  const current = qs.parse(searchParams.toString());

  const query = {
    ...current,
    [valueKey]: id,
  };

  if (current[valueKey] === id) {
    delete query[valueKey];
  }

  if (Object.keys(query).length) {
    let items = [];

    for (const [key, val] of Object.entries(query)) {
      items.push(`${key}=${val}`);
    }

    url += items.join("&");
  }

  router.push(url);
};
</script>

<template>
  <div class="mb-8" v-if="data">
    <h3 class="text-lg font-semibold">{{ name }}</h3>
    <hr class="my-4" />
    <div class="flex flex-wrap gap-2">
      <div v-for="filter in data" :key="filter.id" class="flex items-center">
        <Button
          :className="
            cn(
              'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
              selectedValue === filter.id && 'bg-black text-white'
            )
          "
          @click="onClick(filter.id)"
        >
          {{ filter.name }}
        </Button>
      </div>
    </div>
  </div>
</template>
