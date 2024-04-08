<script setup lang="ts">
import { TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/vue";
import GalleryTab from "./GalleryTab.vue";
import { type Image } from "@/types";

interface GalleryProps {
  images: Image[];
}

const { images } = defineProps<GalleryProps>();
</script>

<template>
  <TabGroup as="div" class="flex flex-col-reverse">
    <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
      <TabList class="grid grid-cols-4 gap-6">
        <GalleryTab v-for="image in images" :key="image.id" :image="image" />
      </TabList>
    </div>
    <TabPanels class="aspect-square w-full">
      <TabPanel v-for="image in images" :key="image.id">
        <div
          class="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden"
        >
          <NuxtImg
            fill
            :src="image.url"
            alt="Image"
            class="object-cover object-center"
          />
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>
