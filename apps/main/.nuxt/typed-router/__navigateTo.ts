// @ts-nocheck
// eslint-disable
// ---------------------------------------------------
// 🚗🚦 Generated by nuxt-typed-router. Do not modify !
// ---------------------------------------------------

import { navigateTo as defaultNavigateTo } from '#imports';
import type { NavigateToOptions } from 'nuxt/dist/app/composables/router';
import type { NavigationFailure } from 'vue-router';
import type { TypedRouteLocationRawFromName, TypedRouteFromName, TypedRoute } from './__router';
import type { RoutesNamesList } from './__routes';
import type { TypedPathParameter, RouteNameFromPath } from './__paths';

type TypedNavigateToOptions<E extends boolean> = Omit<NavigateToOptions, 'external'> & {
  external?: E;
};

/**
 * Typed clone of `navigateTo`
 *
 * @exemple
 *
 * ```ts
 * const resolved = navigateTo({name: 'foo', params: {foo: 'bar'}});
 * ```
 */

interface NavigateToFunction {
  <T extends RoutesNamesList, P extends string, E extends boolean = false>(
    to: TypedRouteLocationRawFromName<T, P>,
    options?: TypedNavigateToOptions<E>
  ): Promise<void | NavigationFailure | TypedRouteFromName<T>>;
}

export const navigateTo: NavigateToFunction = defaultNavigateTo as any;
