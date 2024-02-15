import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["session"]?: typeof import("@sidebase/nuxt-session").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["auth"]?: typeof import("@sidebase/nuxt-auth").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["mongoose"]?: typeof import("nuxt-mongoose").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vcalendar"]?: typeof import("@samk-dev/nuxt-vcalendar").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["mobx"]?: typeof import("mobx-vue-lite/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@sidebase/nuxt-session", Exclude<NuxtConfig["session"], boolean>] | ["@sidebase/nuxt-auth", Exclude<NuxtConfig["auth"], boolean>] | ["nuxt-mongoose", Exclude<NuxtConfig["mongoose"], boolean>] | ["@samk-dev/nuxt-vcalendar", Exclude<NuxtConfig["vcalendar"], boolean>] | ["mobx-vue-lite/nuxt", Exclude<NuxtConfig["mobx"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   session: {
      isEnabled: boolean,

      session: {
         expiryInSeconds: number,

         idLength: number,

         storePrefix: string,

         cookieSameSite: string,

         cookieSecure: boolean,

         cookieHttpOnly: boolean,

         storageOptions: {
            driver: string,

            options: any,
         },

         domain: boolean,

         ipPinning: boolean,

         rolling: boolean,
      },

      api: {
         isEnabled: boolean,

         methods: Array<string>,

         basePath: string,
      },
   },

   mongoose: {
      uri: string,

      options: {
         dbName: string,
      },

      devtools: boolean,

      modelsDir: string,
   },
  }
  interface PublicRuntimeConfig {
   session: {
      api: {
         isEnabled: boolean,

         methods: Array<string>,

         basePath: string,
      },
   },

   auth: {
      computed: {
         origin: any,

         pathname: string,

         fullBaseUrl: string,
      },

      isEnabled: boolean,

      session: {
         enableRefreshPeriodically: boolean,

         enableRefreshOnWindowFocus: boolean,
      },

      globalAppMiddleware: {
         isEnabled: boolean,

         allow404WithoutAuth: boolean,

         addDefaultCallbackUrl: boolean,
      },

      provider: {
         type: string,

         trustHost: boolean,

         defaultProvider: any,

         addDefaultCallbackUrl: boolean,
      },
   },

   vcalendar: any,
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }