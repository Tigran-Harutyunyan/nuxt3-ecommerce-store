<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
</script>
<template>
  <NuxtLoadingIndicator color="#163858" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
