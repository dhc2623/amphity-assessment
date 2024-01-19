import { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default"
declare module "../../../../node_modules/.pnpm/nuxt@3.9.0_vite@5.0.10/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}