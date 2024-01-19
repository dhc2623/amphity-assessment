<script setup lang="ts">
const emailChangeRefresh = useRefreshKey();
const passwordChangeRefresh = useRefreshKey();
</script>

<template>
  <MContainer title="My Account">
    <AccountDetails></AccountDetails>
    <div class="py-4"></div>
    <EmailChangeCard
      :key="emailChangeRefresh.refreshKey.value"
      :refresh="emailChangeRefresh.refresh"
    ></EmailChangeCard>
    <div class="py-4"></div>
    <PasswordChangeCard
      :key="passwordChangeRefresh.refreshKey.value"
      :refresh="passwordChangeRefresh.refresh"
    ></PasswordChangeCard>
  </MContainer>
</template>
