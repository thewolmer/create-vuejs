<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="flex items-center justify-center py-16 select-none">
    <img
      src="./assets/logo.svg"
      loading="lazy"
      class="w-20 animate-spin-slow opacity-75 invert dark:invert-0"
      alt=""
    />
  </div>
  <NavBar />
  <RouterView />

  <!-- <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view> -->
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
