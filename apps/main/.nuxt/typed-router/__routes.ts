// @ts-nocheck
// eslint-disable
// ---------------------------------------------------
// 🚗🚦 Generated by nuxt-typed-router. Do not modify !
// ---------------------------------------------------

/**
 * Exhaustive list of all the available route names in the app
 * */
export type RoutesNamesList =
  | 'dashboard-account'
  | 'dashboard-all-teams-create-team'
  | 'dashboard-all-teams'
  | 'dashboard'
  | 'dashboard-team-details-_id'
  | 'dashboard-team-details-create-task'
  | 'dashboard-team-details-task-details-_task_id'
  | 'index'
  | 'otp'
  | 'password-resetrequest'
  | 'password-resetsubmit'
  | 'register';

/**
 * Routes params are only required for the exact targeted route name,
 * vue-router behaviour allow to navigate between children routes without the need to provide all the params every time.
 * So we can't enforce params when navigating between routes, only a `[xxx].vue` page will have required params in the type definition
 *
 * */
export type RoutesParamsRecord = {
  'dashboard-account': never;
  'dashboard-all-teams-create-team': never;
  'dashboard-all-teams': never;
  dashboard: never;
  'dashboard-team-details-_id': {
    _id: string | number;
  };
  'dashboard-team-details-create-task': never;
  'dashboard-team-details-task-details-_task_id': {
    _task_id: string | number;
  };
  index: never;
  otp: never;
  'password-resetrequest': never;
  'password-resetsubmit': never;
  register: never;
};

/**
 * Record resolved used for resolved routes
 *
 * */
export type RoutesParamsRecordResolved = {
  'dashboard-account': never;
  'dashboard-all-teams-create-team': never;
  'dashboard-all-teams': never;
  dashboard: never;
  'dashboard-team-details-_id': {
    _id: string;
  };
  'dashboard-team-details-create-task': never;
  'dashboard-team-details-task-details-_task_id': {
    _task_id: string;
  };
  index: never;
  otp: never;
  'password-resetrequest': never;
  'password-resetsubmit': never;
  register: never;
};

/**
 * Discriminated union that will allow to infer params based on route name
 * It's used for programmatic navigation like router.push or <NuxtLink/>
 * */
export type RoutesNamedLocations =
  | { name: 'dashboard-account' }
  | { name: 'dashboard-all-teams-create-team' }
  | { name: 'dashboard-all-teams' }
  | { name: 'dashboard' }
  | {
      name: 'dashboard-team-details-_id';
      params: {
        _id: string | number;
      };
    }
  | { name: 'dashboard-team-details-create-task' }
  | {
      name: 'dashboard-team-details-task-details-_task_id';
      params: {
        _task_id: string | number;
      };
    }
  | { name: 'index' }
  | { name: 'otp' }
  | { name: 'password-resetrequest' }
  | { name: 'password-resetsubmit' }
  | { name: 'register' };

/**
 * Type returned by a resolved Route that will allow to type guard the route name.
 * By default the params are unknown
 * */
export type RoutesNamedLocationsResolved = {
  name: RoutesNamesList;
  params: unknown;
} & (
  | { name: 'dashboard-account' }
  | { name: 'dashboard-all-teams-create-team' }
  | { name: 'dashboard-all-teams' }
  | { name: 'dashboard' }
  | {
      name: 'dashboard-team-details-_id';
      params: {
        _id: string;
      };
    }
  | { name: 'dashboard-team-details-create-task' }
  | {
      name: 'dashboard-team-details-task-details-_task_id';
      params: {
        _task_id: string;
      };
    }
  | { name: 'index' }
  | { name: 'otp' }
  | { name: 'password-resetrequest' }
  | { name: 'password-resetsubmit' }
  | { name: 'register' }
);

export type RoutesNamesListRecord = {
  dashboard: {
    account: 'dashboard-account';
    allTeamsCreateTeam: 'dashboard-all-teams-create-team';
    allTeams: 'dashboard-all-teams';
    index: 'dashboard';
    teamDetailsId: 'dashboard-team-details-_id';
    teamDetailsCreateTask: 'dashboard-team-details-create-task';
    teamDetailsTaskDetailsTaskId: 'dashboard-team-details-task-details-_task_id';
  };
  index: 'index';
  otp: 'otp';
  passwordResetrequest: 'password-resetrequest';
  passwordResetsubmit: 'password-resetsubmit';
  register: 'register';
};

export const routesNames = {
  dashboard: {
    account: 'dashboard-account' as const,
    allTeamsCreateTeam: 'dashboard-all-teams-create-team' as const,
    allTeams: 'dashboard-all-teams' as const,
    index: 'dashboard' as const,
    teamDetailsId: 'dashboard-team-details-_id' as const,
    teamDetailsCreateTask: 'dashboard-team-details-create-task' as const,
    teamDetailsTaskDetailsTaskId: 'dashboard-team-details-task-details-_task_id' as const,
  },
  index: 'index' as const,
  otp: 'otp' as const,
  passwordResetrequest: 'password-resetrequest' as const,
  passwordResetsubmit: 'password-resetsubmit' as const,
  register: 'register' as const,
};