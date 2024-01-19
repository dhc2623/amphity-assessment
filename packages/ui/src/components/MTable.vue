<script setup lang="ts">
import { useRoute } from "vue-router";
import MBtn from "./MBtn.vue";

interface TableRow {
  id: number;
  columns: string[];
}

const route = useRoute();

const props = defineProps<{
  headers: string[];
  rows: TableRow[];
  clickableColumn?: boolean;
  linkPrefix?: string;
  cellClickValue?: boolean;
  isButtonVisible?: boolean;
}>();

const handleCellClick = (row: TableRow) => {
  // Emit an event with the entire row data
  if (props.cellClickValue) {
    console.log("row-click", row.columns[1]);
    localStorage.setItem("clicked-owner-name", row.columns[1] || "");
    // setOwnerName(row.columns[1]);
  }
};

const handleDeleteBtn = (id: number) => {
  alert(`Task ID - ${id} deleted successfully`);
};

const handleEditBtn = (id: number) => {
  alert(`Task ID - ${id} edited successfully`);
  // here we can again open a page which we are using in creating task via creating edit-task ---> [_id].vue page in which we can also update the status
};
</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full border border-gray-300 bg-white">
      <thead>
        <tr>
          <th
            v-for="(header, index) in props.headers"
            :key="index"
            class="column-header"
          >
            {{ header }}
          </th>
          <th v-if="isButtonVisible">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in props.rows"
          :key="row.id"
          class="hover:bg-gray-100"
        >
          <td
            v-for="(column, index) in row.columns"
            :key="index"
            class="column-data"
            @click="handleCellClick(row)"
          >
            <template v-if="index === 0 && props.clickableColumn">
              <router-link :to="`${props.linkPrefix}/${row.id}`">
                {{ column }}
              </router-link>
            </template>
            <template v-else>
              {{ column }}
            </template>
          </td>

          <template
            v-if="
              route.path &&
              isButtonVisible &&
              route.path.includes('team-details') &&
              !route.path.includes('task-details')
            "
          >
            <td class="column-data">
              <MBtn
                v-if="isButtonVisible"
                variant="text"
                color="primary"
                @click="handleEditBtn(row.id)"
              >
                Edit
              </MBtn>
              <MBtn
                v-if="isButtonVisible"
                variant="text"
                color="error"
                @click="handleDeleteBtn(row.id)"
              >
                Delete
              </MBtn>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.column-header {
  width: 100px; /* Adjust the width as needed */
  padding: 8px;
  border: 1px solid #ddd;
}

.column-data {
  width: 100px; /* Adjust the width as needed */
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
  min-width: 500;
}
</style>
