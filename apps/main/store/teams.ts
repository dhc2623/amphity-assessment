import { defineStore } from "pinia";
import { teamData } from "../../main/constants/team-data";

export const useTeamstore = defineStore("teams", () => {
  const state = reactive({
    teams: [] as any[], // Adjust the type based on your API response
    loading: false,
    error: null as null | string, // Explicitly declare the type
  });

  const fetchTeams = () => {
    try {
      state.loading = true;
      state.teams = teamData;
      state.error = null;
    } catch (error) {
      state.error = "Failed to fetch teams.";
    } finally {
      state.loading = false;
    }
  };
  return {
    state,
    fetchTeams,
  };
});
