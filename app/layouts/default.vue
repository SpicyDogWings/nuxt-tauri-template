<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Home',
      icon: 'lucide:house',
      to: "/"
    }
  ],
])
</script>

<template>
    <div class="flex justify-start items-start min-h-screen">
        <UNavigationMenu collapsed orientation="vertical" :items="items" class="data-[orientation=vertical]:w-fit" />
        <div class="flex flex-col justify-start items-start">
            <slot />
        </div>
    </div>
</template>
