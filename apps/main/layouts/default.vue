<script setup lang="ts">
import { useAuthStore } from "../store/auth";
const sidepanelOpen = ref(false);
const authStore = useAuthStore();
</script>

<template>
  <div>
    <div class="h-full">
      <div v-if="authStore.isLoggedIn">
        <AppSidePanel v-model="sidepanelOpen">
          <AppHeader @toggle:sidepanel="sidepanelOpen = !sidepanelOpen" />
          <main>
            <slot />
          </main>
        </AppSidePanel>
        <AppSnackbar />
      </div>
      <div v-else>
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
