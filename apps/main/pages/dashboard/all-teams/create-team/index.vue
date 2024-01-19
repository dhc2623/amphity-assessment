<script setup lang="ts">
import { useRouter } from "vue-router";
import {
  createTeamSchema,
  type CreateTeamSchemaType,
} from "../../../../../../packages/validation/lib/teams";

const { $useMutation } = useNuxtApp();
// const trpcClient = useTrpcClient();
const router = useRouter();

const isCreateTeamSchemaType = (obj: unknown): obj is CreateTeamSchemaType => {
  return (obj as CreateTeamSchemaType)?.name !== undefined;
};

const { mutate, isPending } = $useMutation({
  mutationFn: (v: unknown) => {
    /* const inputValues = {
      name: v.name,
      owner_name: localStorage.getItem("owner-name"),
    };
    console.log("inputValues...", inputValues); */
    if (isCreateTeamSchemaType(v)) {
      const inputValues = {
        name: v.name,
        owner_name: localStorage.getItem("owner-name"),
      };
      console.log("inputValues...", inputValues);
      // trpcClient.teams.createTeam.mutate(v as CreateTeamSchemaType),
    }

    // trpcClient.teams.createTeam.mutate(v as CreateTeamSchemaType),
  },
  onSuccess: () => {
    alert("Team created successfully...");
    router.push("/dashboard/all-teams");
  },
  onError: (error) => {
    console.error("Error creating team:", error);
  },
});
const handleCancelButton = () => {
  router.push("/dashboard/all-teams");
};
</script>

<template>
  <MContainer title="Create Team">
    <MForm
      :zodSchema="createTeamSchema"
      @submit="mutate"
    >
      <div>
        <MTextField
          name="name"
          label="Team Name"
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
          @click="handleCancelButton()"
        >
          Cancel
        </MBtn>
      </MRow>
    </MForm>
  </MContainer>
</template>
