import {
  createTeamSchema,
  createTaskSchema,
} from "../../../../packages/validation/lib/teams";
import { router, publicProcedure } from "../trpc";

export const teams = router({
  createTeam: publicProcedure
    .input(createTeamSchema)
    .mutation(async ({ input }) => {
      console.log("Team name:", input.name);
      return {
        success: true,
      };
    }),
  // for task
  createTask: publicProcedure
    .input(createTaskSchema)
    .mutation(async ({ input }) => {
      console.log("Task name:", input.name);
      return {
        success: true,
      };
    }),
});
