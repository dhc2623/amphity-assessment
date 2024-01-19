<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  createTaskSchema,
  type CreateTaskSchemaType,
} from "../../../../../../packages/validation/lib/teams";
import MDatePicker from "../../../../../../packages/ui/src/components/MDatePicker.vue";

const { $useMutation } = useNuxtApp();
const router = useRouter();

const isCreateTaskSchemaType = (obj: unknown): obj is CreateTaskSchemaType => {
  return (obj as CreateTaskSchemaType)?.name !== undefined;
};

const { mutate, isPending } = $useMutation({
  mutationFn: (v: unknown) => {
    if (isCreateTaskSchemaType(v)) {
      const inputValues = {
        name: v.name,
      };
      console.log("inputValues...", inputValues);
    }
  },
  onSuccess: () => {
    alert("Task created successfully...");
    router.push(`/dashboard/team-details/${localStorage.getItem("team-id")}`);
  },
  onError: (error) => {
    console.error("Error creating task:", error);
  },
});

const handleCancelButton = () => {
  router.push(`/dashboard/team-details/${localStorage.getItem("team-id")}`);
};
</script>

<template>
  <MContainer title="Create Task">
    <MForm
      :zodSchema="createTaskSchema"
      @submit="mutate"
    >
      <div>
        <MTextField
          name="name"
          label="Task Name"
          class="my-2"
        ></MTextField>
      </div>

      <MRow
        class="justify-content-end"
        style="float: right"
      >
        <MBtn
          size="lg"
          type="submit"
          color="primary"
          :loading="isPending"
        >
          Submit
        </MBtn>
        <MBtn
          variant="text"
          color="error"
          @click="handleCancelButton"
        >
          Cancel
        </MBtn>
      </MRow>
    </MForm>
  </MContainer>
</template>
