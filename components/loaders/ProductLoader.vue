<script setup lang="ts">
import Container from "@/components/Container.vue";
import Skeleton from "@/components/ui/Skeleton.vue";
</script>

<template>
  <Container>
    <div class="w-full h-full p-8">
      <div class="mx-auto px-4 py-10 sm:px-6 max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Skeleton class="rounded-xl aspect-square" />
          <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Skeleton class="rounded-xl aspect-square" />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Skeleton class="aspect-square rounded-xl" />
          <Skeleton class="aspect-square rounded-xl" />
          <Skeleton class="aspect-square rounded-xl" />
        </div>
      </div>
    </div>
  </Container>
</template>
