<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
</script>
<template>
  <NuxtLoadingIndicator color="#163858" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
