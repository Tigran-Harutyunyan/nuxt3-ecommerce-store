<script setup lang="ts">
import { type Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}
const { data } = defineProps<BillboardProps>();
</script>

<template>
  <div class="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
    <div
      :style="{ backgroundImage: `url(${data?.imageUrl})` }"
      class="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
    >
      <div
        class="h-full w-full flex flex-col justify-center items-center text-center gap-y-8"
      >
        <div
          class="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs"
        >
          <!-- {{ data?.label }} -->
        </div>
      </div>
    </div>
  </div>
</template>
