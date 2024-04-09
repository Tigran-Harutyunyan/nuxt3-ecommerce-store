<script setup lang="ts">
import Container from "@/components/Container.vue";
import Skeleton from "@/components/ui/Skeleton.vue";
</script>

<template>
  <Container>
    <div class="w-full h-full p-8">
      <Skeleton class="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
      <div class="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-8 h-full">
        <div class="hidden lg:block">
          <Skeleton class="w-full h-[500px] rounded-xl" />
        </div>
        <div class="mt-6 lg:col-span-4 lg:mt-0">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Skeleton class="aspect-square rounded-xl" />
            <Skeleton class="aspect-square rounded-xl" />
            <Skeleton class="aspect-square rounded-xl" />
            <Skeleton class="aspect-square rounded-xl" />
            <Skeleton class="aspect-square rounded-xl" />
            <Skeleton class="aspect-square rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
