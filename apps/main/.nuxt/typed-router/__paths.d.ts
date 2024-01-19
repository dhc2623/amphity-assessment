// @ts-nocheck
// eslint-disable
// ---------------------------------------------------
// 🚗🚦 Generated by nuxt-typed-router. Do not modify !
// ---------------------------------------------------

export type RoutePathSchema =
  | '/'
  | '/dashboard/account'
  | '/dashboard/all-teams/create-team'
  | '/dashboard/all-teams'
  | '/dashboard/'
  | '/dashboard/team-details/:_id'
  | '/dashboard/team-details/create-task'
  | '/dashboard/team-details/task-details/:_task_id'
  | '/otp'
  | '/password/resetrequest'
  | '/password/resetsubmit'
  | '/register';

type ValidStringPath<T> = T extends `${string} ${string}` ? false : T extends '' ? false : true;

type ValidParam<T, R extends boolean = true> = T extends `${infer A}/${infer B}`
  ? A extends `${string} ${string}`
    ? false
    : A extends `?${string}`
      ? false
      : A extends `${string} ${string}`
        ? false
        : A extends ''
          ? B extends ''
            ? true
            : false
          : B extends `?${string}`
            ? false
            : B extends `#${string}`
              ? true
              : B extends ''
                ? true
                : false
  : R extends true
    ? T extends ''
      ? false
      : ValidParam<T, false>
    : T extends `?${string}`
      ? false
      : T extends `${string} ${string}`
        ? false
        : true;

type ValidEndOfPath<T> = T extends `/`
  ? true
  : T extends ''
    ? true
    : T extends `${string} ${string}`
      ? false
      : T extends `?${string}`
        ? true
        : T extends `#${string}`
          ? true
          : false;

type ValidateDashboardAccount<T> = T extends `/dashboard/account${infer TAccount}`
  ? ValidEndOfPath<TAccount> extends false
    ? "End of path '/dashboard/account' is invalid"
    : true
  : false;

type ValidateDashboardAllTeamsCreateTeam<T> =
  T extends `/dashboard/all-teams/create-team${infer TCreateTeam}`
    ? ValidEndOfPath<TCreateTeam> extends false
      ? "End of path '/dashboard/all-teams/create-team' is invalid"
      : true
    : false;

type ValidateDashboardAllTeams<T> = T extends `/dashboard/all-teams${infer TAllTeams}`
  ? ValidEndOfPath<TAllTeams> extends false
    ? "End of path '/dashboard/all-teams' is invalid"
    : true
  : false;

type ValidateDashboard<T> = T extends `/dashboard${infer TDashboard}`
  ? ValidEndOfPath<TDashboard> extends false
    ? "End of path '/dashboard/' is invalid"
    : true
  : false;

type ValidateDashboardTeamDetailsId<T> = T extends `/dashboard/team-details/${infer TId}`
  ? ValidParam<TId> extends false
    ? "Parameter {_id} of path '/dashboard/team-details/:_id' is invalid"
    : true
  : false;

type ValidateDashboardTeamDetailsCreateTask<T> =
  T extends `/dashboard/team-details/create-task${infer TCreateTask}`
    ? ValidEndOfPath<TCreateTask> extends false
      ? "End of path '/dashboard/team-details/create-task' is invalid"
      : true
    : false;

type ValidateDashboardTeamDetailsTaskDetailsTaskId<T> =
  T extends `/dashboard/team-details/task-details/${infer TTaskId}`
    ? ValidParam<TTaskId> extends false
      ? "Parameter {_task_id} of path '/dashboard/team-details/task-details/:_task_id' is invalid"
      : true
    : false;

type ValidateOtp<T> = T extends `/otp${infer TOtp}`
  ? ValidEndOfPath<TOtp> extends false
    ? "End of path '/otp' is invalid"
    : true
  : false;

type ValidatePasswordResetrequest<T> = T extends `/password/resetrequest${infer TResetrequest}`
  ? ValidEndOfPath<TResetrequest> extends false
    ? "End of path '/password/resetrequest' is invalid"
    : true
  : false;

type ValidatePasswordResetsubmit<T> = T extends `/password/resetsubmit${infer TResetsubmit}`
  ? ValidEndOfPath<TResetsubmit> extends false
    ? "End of path '/password/resetsubmit' is invalid"
    : true
  : false;

type ValidateRegister<T> = T extends `/register${infer TRegister}`
  ? ValidEndOfPath<TRegister> extends false
    ? "End of path '/register' is invalid"
    : true
  : false;

export type ValidatePath<T extends string> = T extends string
  ? T extends '/'
    ? T
    : ValidateDashboardAccount<T> extends true
      ? T
      : ValidateDashboardAllTeamsCreateTeam<T> extends true
        ? T
        : ValidateDashboardAllTeams<T> extends true
          ? T
          : ValidateDashboard<T> extends true
            ? T
            : ValidateDashboardTeamDetailsId<T> extends true
              ? T
              : ValidateDashboardTeamDetailsCreateTask<T> extends true
                ? T
                : ValidateDashboardTeamDetailsTaskDetailsTaskId<T> extends true
                  ? T
                  : ValidateOtp<T> extends true
                    ? T
                    : ValidatePasswordResetrequest<T> extends true
                      ? T
                      : ValidatePasswordResetsubmit<T> extends true
                        ? T
                        : ValidateRegister<T> extends true
                          ? T
                          : string extends T
                            ? T
                            : `Error: ${
                                | ValidateDashboardAccount<T>
                                | ValidateDashboardAllTeamsCreateTeam<T>
                                | ValidateDashboardAllTeams<T>
                                | ValidateDashboard<T>
                                | ValidateDashboardTeamDetailsId<T>
                                | ValidateDashboardTeamDetailsCreateTask<T>
                                | ValidateDashboardTeamDetailsTaskDetailsTaskId<T>
                                | ValidateOtp<T>
                                | ValidatePasswordResetrequest<T>
                                | ValidatePasswordResetsubmit<T>
                                | ValidateRegister<T>}`
  : never;

// RouteNameFromPath, RouteNameFromLocalePath
export type RouteNameFromPath<T extends string> = T extends string
  ? T extends '/'
    ? 'index'
    : ValidateDashboardAccount<T> extends true
      ? 'dashboard-account'
      : ValidateDashboardAllTeamsCreateTeam<T> extends true
        ? 'dashboard-all-teams-create-team'
        : ValidateDashboardAllTeams<T> extends true
          ? 'dashboard-all-teams'
          : ValidateDashboard<T> extends true
            ? 'dashboard'
            : ValidateDashboardTeamDetailsId<T> extends true
              ? 'dashboard-team-details-_id'
              : ValidateDashboardTeamDetailsCreateTask<T> extends true
                ? 'dashboard-team-details-create-task'
                : ValidateDashboardTeamDetailsTaskDetailsTaskId<T> extends true
                  ? 'dashboard-team-details-task-details-_task_id'
                  : ValidateOtp<T> extends true
                    ? 'otp'
                    : ValidatePasswordResetrequest<T> extends true
                      ? 'password-resetrequest'
                      : ValidatePasswordResetsubmit<T> extends true
                        ? 'password-resetsubmit'
                        : ValidateRegister<T> extends true
                          ? 'register'
                          : never
  : never;

export type TypedPathParameter<T extends string> = ValidatePath<T> | RoutePathSchema;
