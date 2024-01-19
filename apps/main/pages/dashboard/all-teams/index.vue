<script setup lang="ts">
import { onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import MTable from "../../../../../packages/ui/src/components/MTable.vue";
import MContainer from "../../../../../packages/ui/src/components/MContainer.vue";
import MForm from "../../../../../packages/ui/src/components/MForm.vue";
import MBtn from "../../../../../packages/ui/src/components/MBtn.vue";
import { useTeamstore } from "../../../store/teams";

const { state, fetchTeams } = useTeamstore();
const tableHeaders = ["Team Name", "Owner Name"];
let tableRows = [];
const router = useRouter();

onMounted(async () => {
  await fetchTeams();
});

const handleAddTeam = () => {
  router.push("/dashboard/all-teams/create-team");
};

watchEffect(() => {
  // as here we are using nested map() to get the desired result so we need to make that result as per our props type therefore we need to flatten the each data coming from map() for that we'll use flatMap() - map() + flat()
  tableRows = state.teams.flatMap((owner) => {
    return owner.teams.flatMap((team) => {
      return {
        id: team.id,
        columns: [team.teamName, owner.ownerName],
      };
    });
  });
});
</script>

<template>
  <div class="text-pretty p-4">
    <p v-if="state.loading">Loading...</p>
    <p v-else-if="state.error">{{ state.error }}</p>
    <p v-else>
      <strong>All Teams</strong>
      <MBtn
        type="submit"
        color="primary"
        style="float: right"
        @click="handleAddTeam()"
      >
        Add Team +
      </MBtn>
      <br />
      <span>Click on team's name to see the team deatils</span>
    </p>
    <MTable
      v-if="!state.loading && !state.error"
      :headers="tableHeaders"
      :rows="tableRows"
      :clickableColumn="true"
      :linkPrefix="'/dashboard/team-details'"
      :cellClickValue="true"
    />
  </div>
</template>
