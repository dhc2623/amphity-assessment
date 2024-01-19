<script setup lang="ts">
import { onMounted, watchEffect, ref } from "vue";
import { useTeamstore } from "../../../../store/teams";
import MTable from "../../../../../../packages/ui/src/components/MTable.vue";

const { state, fetchTeams } = useTeamstore();
const tableHeaders = ["Team Members", "Joining Date"];
let tableRows = [];
const taskName = ref("");
const urlString = window.location.href;
const url = new URL(urlString);
const id = url.pathname.split("/").pop();
const teamId = localStorage.getItem("team-id");

onMounted(async () => {
  await fetchTeams();
});

watchEffect(() => {
  // as here we are using nested map() to get the desired result so we need to make that result as per our props type therefore we need to flatten the each data coming from map() for that we'll use flatMap() - map() + flat()
  tableRows = state?.teams?.flatMap((owner) => {
    return owner?.teams
      ?.filter((team) => parseInt(teamId) === team.id)
      ?.flatMap((team) => {
        return team?.tasks
          ?.filter((task) => parseInt(id) === task.id)
          ?.flatMap((task) => {
            taskName.value = task.taskName;
            return task?.teamMembers?.map((member) => {
              return {
                id: member.id,
                columns: [member.memberName, member.joiningDate],
              };
            });
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
      <strong>{{ taskName }}</strong>
      <br />
    </p>
    <MTable
      v-if="!state.loading && !state.error"
      :headers="tableHeaders"
      :rows="tableRows"
    />
  </div>
</template>
