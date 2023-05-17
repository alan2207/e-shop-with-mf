<template>
  <div class="bg-white">
    <div class="relative bg-black">
      <!-- Decorative image and overlay -->
      <div aria-hidden="true" class="absolute inset-0 overflow-hidden"></div>
      <div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50" />

      <div
        class="relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0"
      >
        <h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">
          New products are here
        </h1>
        <a
          href="/products"
          class="inline-block px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100"
          >Shop New Products</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
