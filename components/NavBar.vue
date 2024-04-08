<script setup lang="ts">
import MainNav from "@/components/MainNav.vue";
import Container from "@/components/Container.vue";
import NavbarActions from "@/components/NavbarActions.vue";
import { type Category } from "@/types";

const { data: categories } = useFetch<Category[]>("/api/categories", {
  server: true,
});
</script>

<template>
  <div class="border-b">
    <Container>
      <div class="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <NuxtLink to="/" class="ml-4 flex lg:ml-0 gap-x-2">
          <p class="font-bold text-xl">STORE</p>
        </NuxtLink>
        <MainNav :data="categories" />
        <NavbarActions />
      </div>
    </Container>
  </div>
</template>
