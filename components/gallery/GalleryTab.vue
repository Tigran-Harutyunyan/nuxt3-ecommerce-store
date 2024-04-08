<script setup lang="ts">
import { Tab } from "@headlessui/vue";

import { cn } from "@/lib/utils";
import { type Image } from "@/types";

interface GalleryTabProps {
  image: Image;
}

const { image } = defineProps<GalleryTabProps>();
</script>

<template>
  <Tab
    as="template"
    v-slot="{ selected }"
    class="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
  >
    <div>
      <span
        class="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md"
      >
        <NuxtImg
          fill
          :src="image.url"
          alt=""
          class="object-contain h-full object-center mx-auto"
        />
      </span>
      <span
        :class="
          cn(
            'absolute inset-0 rounded-md ring-2 ring-offset-2',
            selected ? 'ring-black' : 'ring-transparent'
          )
        "
      />
    </div>
  </Tab>
</template>
