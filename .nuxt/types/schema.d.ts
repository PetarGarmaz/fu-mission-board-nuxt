import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["session"]?: typeof import("@sidebase/nuxt-session").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["mongoose"]?: typeof import("nuxt-mongoose").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@sidebase/nuxt-session", Exclude<NuxtConfig["session"], boolean>] | ["nuxt-mongoose", Exclude<NuxtConfig["mongoose"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
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
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }