<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <Toast />
  <div class="flex flex-col gap-3">
    <div>
      <Nav />
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
