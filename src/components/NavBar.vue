<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex gap-x-6 items-center justify-center text-center mb-8">
    <router-link to="/">
      <div
        class="flex hover:bg-primary-active/50 px-1 bg-primary-active/30 cursor-pointer transition-all"
      >
        Home
      </div>
    </router-link>
    <router-link to="/docs">
      <div
        class="flex hover:bg-primary-active/50 px-1 bg-primary-active/30 cursor-pointer transition-all"
      >
        About
      </div>
    </router-link>
    <button @click="toggleDark()" class="relative flex overflow-hidden shrink-0">
      <div v-if="isDark == false" class="flex">
        <i class="bx bx-moon text-xl text-light-heading"></i>
      </div>
      <div v-else class="flex">
        <i class="bx bx-sun text-xl text-dark-heading"></i>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style></style>
