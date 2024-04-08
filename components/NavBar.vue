<script setup lang="ts">
import { UserButton, ClerkLoaded, SignedIn } from "vue-clerk";
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

        <ClerkLoaded>
          <div class="ml-2">
            <SignedIn>
              <UserButton
                class="ml-2"
                afterSignOutUrl="/"
                :appearance="{
                  elements: {
                    avatarBox: 'h-[42px] w-[42px]',
                  },
                }"
              />
            </SignedIn>
          </div>
        </ClerkLoaded>
      </div>
    </Container>
  </div>
</template>
