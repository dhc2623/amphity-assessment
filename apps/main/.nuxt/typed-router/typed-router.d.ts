// @ts-nocheck
// eslint-disable
// ---------------------------------------------------
// 🚗🚦 Generated by nuxt-typed-router. Do not modify !
// ---------------------------------------------------

import type { NuxtLinkProps, PageMeta } from 'nuxt/app';
import NuxtLink from 'nuxt/dist/app/components/nuxt-link';
import type { RouteLocationRaw, RouteLocationPathRaw } from 'vue-router';
import type { RoutesNamedLocations, RoutesNamesListRecord, RoutesNamesList } from './__routes';
import type {
  TypedRouter,
  TypedRoute,
  TypedRouteLocationRawFromName,
  TypedLocationAsRelativeRaw,
  NuxtRoute,
} from './__router';
import { useRoute as _useRoute } from './__useTypedRoute';
import { useRouter as _useRouter } from './__useTypedRouter';
import { useLink as _useLink } from './__useTypedLink';
import { navigateTo as _navigateTo } from './__navigateTo';

import { definePageMeta as _definePageMeta } from './__definePageMeta';

import type { TypedPathParameter } from './__paths';

declare global {
  const useRoute: typeof _useRoute;
  const useRouter: typeof _useRouter;
  const useLink: typeof _useLink;
  const navigateTo: typeof _navigateTo;
  const definePageMeta: typeof _definePageMeta;
}

type TypedNuxtLinkProps<
  T extends RoutesNamesList,
  P extends string,
  E extends boolean = false,
> = Omit<NuxtLinkProps, 'to' | 'external'> & {
  to: NuxtRoute<T, P, E>;
  external?: E;
};

export type TypedNuxtLink = new <
  T extends RoutesNamesList,
  P extends string,
  E extends boolean = false,
>(
  props: TypedNuxtLinkProps<T, P, E>
) => Omit<typeof NuxtLink, '$props'> & {
  $props: TypedNuxtLinkProps<T, P, E>;
};

declare module 'vue' {
  interface GlobalComponents {
    NuxtLink: TypedNuxtLink;
  }
}