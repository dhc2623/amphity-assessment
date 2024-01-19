import { object, string } from "zod";
import type { z } from "zod";

// create team
export const createTeamSchema = object({
  name: string().min(2),
});
export type CreateTeamSchemaType = z.infer<typeof createTeamSchema>;

// create task
export const createTaskSchema = object({
  name: string().min(2),
  /* createdDate: date(),
  completionDate: date().optional(),
  taskStatus: string(), */
});
export type CreateTaskSchemaType = z.infer<typeof createTaskSchema>;
