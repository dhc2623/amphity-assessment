<script setup lang="ts">
import { onMounted, watchEffect } from "vue";
import MTable from "../../../../packages/ui/src/components/MTable.vue";
import { useTeamstore } from "../../store/teams";

const { state, fetchTeams } = useTeamstore();
const tableHeaders = ["Team Name", "Task Name", "Task Status"];
let tableRows = [];
const ownerName = "Divyanshi Ratre";

onMounted(async () => {
  await fetchTeams();
});

watchEffect(() => {
  // as here we are using nested map() to get the desired result so we need to make that result as per our props type therefore we need to flatten the each data coming from map() for that we'll use flatMap() - map() + flat()

  tableRows = state.teams
    .filter((owner) => owner.ownerName === ownerName)
    .flatMap((owner) => {
      return owner.teams.flatMap((team) => {
        return team.tasks.map((task) => {
          return {
            id: team.id,
            columns: [team.teamName, task.taskName, task.taskStatus],
          };
        });
      });
    });
});
</script>

<template>
  <div class="text-pretty p-4">
    <p v-if="state.loading">Loading...</p>
    <p v-else-if="state.error">{{ state.error }}</p>
    <p v-else>
      <strong>{{ `${ownerName}'s Team` }}</strong>
    </p>
    <MTable
      v-if="!state.loading && !state.error"
      :headers="tableHeaders"
      :rows="tableRows"
    />
  </div>
</template>
