<template>
  <main>
    <PageHeader> Popup </PageHeader>

    <button type="button" @click="openOptionsPage">Open Options</button>
  </main>
</template>

<script setup lang="ts">
import PageHeader from "../components/PageHeader.vue";
import browser from "webextension-polyfill";

function openOptionsPage() {
  browser.runtime.openOptionsPage();
}
</script>

<style scoped>
button {
  margin-top: 10px;
}
</style>
