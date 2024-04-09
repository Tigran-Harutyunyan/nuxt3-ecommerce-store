<script setup lang="ts">
import Toaster from "@/components/ui/toast/Toaster.vue";
import { VuePreloader } from "vue-preloader";
import "../node_modules/vue-preloader/dist/style.css";

const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
<template>
  <NuxtLoadingIndicator color="#163858" />
  <VuePreloader
    v-if="loading"
    background-color="#091a28"
    color="#ffffff"
    transition-type="fade-up"
    :loading-speed="25"
    :transition-speed="1400"
  ></VuePreloader>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
