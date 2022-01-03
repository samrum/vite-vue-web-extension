<template>
  <header>
    <img :src="imageUrl" height="45" />
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script setup lang="ts">
import logo from "./../assets/logo.svg";

const imageUrl = new URL(logo, import.meta.url).href;
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin: 0;
}
</style>
