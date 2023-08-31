<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navigation from './components/navigation.vue'
</script>

<template>
  <div>
    <navigation></navigation>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
