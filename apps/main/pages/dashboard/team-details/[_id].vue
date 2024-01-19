<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, watchEffect, ref } from "vue";
import { useTeamstore } from "../../../store/teams";
import MTable from "../../../../../packages/ui/src/components/MTable.vue";
import MDialog from "../../../../../packages/ui/src/components/MDialog.vue";
import MDropdown from "../../../../../packages/ui/src/components/MDropdown.vue";
import { taskStatus } from "../../../../../apps/main/constants/task-status";

const { state, fetchTeams } = useTeamstore();
const tableHeaders = [
  "Task Name",
  "Created Date",
  "Completion Date",
  "Task Status",
];
let tableRows = [];
const teamName = ref("");
const urlString = window.location.href;
const url = new URL(urlString);
const id = url.pathname.split("/").pop();
const router = useRouter();
const isButtonVisible = ref(false);
const modelValue = ref(false);
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();
/* const { modelValue } = defineProps<{
  modelValue: boolean;
}>(); */

onMounted(() => {
  fetchTeams();
  handleButtonVisibility();
});

const handleButtonVisibility = () => {
  setTimeout(() => {
    const clickedOwnerName = localStorage.getItem("clicked-owner-name");
    const ownerName = localStorage.getItem("owner-name");
    isButtonVisible.value = clickedOwnerName === ownerName;
  }, 90);
};

const handleAddTask = () => {
  router.push("/dashboard/team-details/create-task");
};

const handleFilterTask = () => {
  console.log();

  modelValue.value = true;
};

/* const handleDeleteRow = (id: number) => {
  // Implement your logic to delete the row with the given id
  console.log("Deleting row with id:", id);
  // Update the tableRows array or refetch data to reflect the deletion
}; */

/* const handleTaskAction = (taskId: number) => {
  // Implement your logic for task actions
  console.log(`Perform action for Task ID: ${taskId}`);
}; */

watchEffect(() => {
  // as here we are using nested map() to get the desired result so we need to make that result as per our props type therefore we need to flatten the each data coming from map() for that we'll use flatMap() - map() + flat()

  tableRows = state?.teams?.flatMap((owner) => {
    return owner?.teams
      ?.filter((team) => parseInt(id) === team.id)
      ?.flatMap((team) => {
        teamName.value = team.teamName;
        localStorage.setItem("team-id", team.id);
        return team?.tasks?.map((task) => {
          return {
            id: task.id,
            columns: [
              task.taskName,
              task.createdDate,
              task.completionDate,
              task.taskStatus,
            ],
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
      <strong>{{ teamName }}</strong>
      <MBtn
        v-if="isButtonVisible"
        type="submit"
        color="primary"
        style="float: right"
        @click="handleAddTask()"
      >
        Add Task +
      </MBtn>
      <MBtn
        type="submit"
        color="primary"
        style="float: right; margin-right: 10px"
        @click="handleFilterTask()"
      >
        Filter
      </MBtn>
      <br />
      <span>Click on task's name to see the task deatils</span>
    </p>
    <MTable
      v-if="!state.loading && !state.error"
      :headers="tableHeaders"
      :rows="tableRows"
      :clickableColumn="true"
      :linkPrefix="`/dashboard/team-details/task-details`"
      :isButtonVisible="isButtonVisible"
    />
    <MDialog
      :modelValue="modelValue"
      title="Filter"
      persistent
      :menuItems="taskStatus"
      @update:modelValue="(v) => emit('update:modelValue', v)"
      @updateDialogModelValue="(v) => (modelValue = v)"
    >
    </MDialog>
  </div>
</template>
