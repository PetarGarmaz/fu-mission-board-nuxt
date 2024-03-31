globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, getRequestHeaders, deleteCookie, parseCookies, setCookie, readBody, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, appendHeader, getHeaders, getMethod, getQuery as getQuery$1, isMethod, getRouterParams, getResponseStatusText } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/h3/dist/index.mjs';
import DiscordProvider from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/next-auth/providers/discord.js';
import { AuthHandler } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/next-auth/core/index.js';
import defu, { defuFn, defu as defu$1 } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/defu/dist/defu.mjs';
import mongoose, { Schema } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/mongoose/index.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/devalue/index.js';
import { renderToString } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/vue/server-renderer/index.mjs';
import { renderSSRHead } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/scule/dist/index.mjs';
import { klona } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/klona/dist/index.mjs';
import { hash } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/radix3/dist/index.mjs';
import getURL from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/requrl/dist/requrl.js';
import { consola } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/unenv/runtime/npm/consola.mjs';
import { colors } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/unenv/runtime/npm/consola/utils.mjs';
import { nanoid } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/nanoid/index.js';
import dayjs from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/dayjs/dayjs.min.js';
import sessionDriver from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/unstorage/drivers/memory.mjs';
import * as argon2 from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/argon2/argon2.js';
import nodemailer from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/nodemailer/lib/nodemailer.js';
import options from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/.nuxt/nuxt-mail/options.mjs';
import send$1 from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/.nuxt/nuxt-mail/send.mjs';
import { version, unref } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const g=E(!0);return g[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}],["RAILWAY","RAILWAY_PROJECT_ID"],["RAILWAY","RAILWAY_SERVICE_ID"]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const l=B(),d=l.name;function n(e){return e?e!=="false":!1}const I=globalThis.process?.platform||"",T=n(s.CI)||l.ci!==!1,R=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const C=t==="test"||n(s.TEST);n(s.MINIMAL)||T||C||!R;const a=/^win/i.test(I);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(R||a)&&s.TERM!=="dumb"||T);const _=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(_?.split(".")[0])||null;const W=globalThis.process||Object.create(null),c={versions:{}};new Proxy(W,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in c)return c[o]}});const A=globalThis.process?.release?.name==="node",L=!!globalThis.Bun||!!globalThis.process?.versions?.bun,D=!!globalThis.Deno,O=!!globalThis.fastly,S=!!globalThis.Netlify,N=!!globalThis.EdgeRuntime,u=globalThis.navigator?.userAgent==="Cloudflare-Workers",b=!!globalThis.__lagon__,F=[[S,"netlify"],[N,"edge-light"],[u,"workerd"],[O,"fastly"],[D,"deno"],[L,"bun"],[A,"node"],[b,"lagon"]];function G(){const e=F.find(o=>o[0]);if(e)return {name:e[1]}}const P=G();P?.name||"";

const inlineAppConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "session": {
      "api": {
        "isEnabled": true,
        "methods": [
          "patch",
          "delete",
          "get",
          "post"
        ],
        "basePath": "/api/session"
      }
    },
    "auth": {
      "computed": {
        "origin": "",
        "pathname": "/api/auth",
        "fullBaseUrl": "/api/auth"
      },
      "isEnabled": true,
      "session": {
        "enableRefreshPeriodically": false,
        "enableRefreshOnWindowFocus": true
      },
      "globalAppMiddleware": {
        "isEnabled": false,
        "allow404WithoutAuth": true,
        "addDefaultCallbackUrl": true
      },
      "provider": {
        "type": "authjs",
        "trustHost": false,
        "defaultProvider": "",
        "addDefaultCallbackUrl": true
      }
    },
    "vcalendar": ""
  },
  "session": {
    "isEnabled": true,
    "session": {
      "expiryInSeconds": 600,
      "idLength": 64,
      "storePrefix": "sessions",
      "cookieSameSite": "lax",
      "cookieSecure": true,
      "cookieHttpOnly": true,
      "storageOptions": {
        "driver": "memory",
        "options": {}
      },
      "domain": false,
      "ipPinning": false,
      "rolling": false
    },
    "api": {
      "isEnabled": true,
      "methods": [
        "patch",
        "delete",
        "get",
        "post"
      ],
      "basePath": "/api/session"
    }
  },
  "mongoose": {
    "uri": "mongodb+srv://Bizo46:P_G_Bizo046@bizocluster.nx9gv59.mongodb.net/fu_mission_board?retryWrites=true&w=majority",
    "options": {
      "dbName": "fu_mission_board"
    },
    "devtools": true,
    "modelsDir": "D:/Projects/Web Dev/fu-mission-board-nuxt/server/models"
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/Projects/Web Dev/fu-mission-board-nuxt/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage$1 = createStorage({});

storage$1.mount('/assets', assets);

storage$1.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Projects\\Web Dev\\fu-mission-board-nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage$1.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\Projects\\Web Dev\\fu-mission-board-nuxt\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage$1.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Projects\\Web Dev\\fu-mission-board-nuxt\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage$1.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\Projects\\Web Dev\\fu-mission-board-nuxt\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage$1.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\Projects\\Web Dev\\fu-mission-board-nuxt\\.data\\kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$1, base) : storage$1;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _k3Yc2qbFb2 = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const ERROR_MESSAGES = {
  NO_SECRET: "AUTH_NO_SECRET: No `secret` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development",
  NO_ORIGIN: "AUTH_NO_ORIGIN: No `origin` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development"
};

const isProduction = "development" === "production";
const useTypedBackendConfig = (runtimeConfig, _type) => {
  return runtimeConfig.public.auth.provider;
};

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

async function defineMongooseConnection({ uri, options } = {}) {
  const config = useRuntimeConfig().mongoose;
  const mongooseUri = uri || config.uri;
  const mongooseOptions = options || config.options;
  try {
    await mongoose.connect(mongooseUri, { ...mongooseOptions });
    consola.success("Connected to MongoDB");
  } catch (err) {
    consola.error(colors.red(`Error connecting to MongoDB: ${err}`));
  }
}

function defineMongooseModel(nameOrOptions, schema, options, hooks) {
  let name;
  if (typeof nameOrOptions === "string") {
    name = nameOrOptions;
  } else {
    name = nameOrOptions.name;
    schema = nameOrOptions.schema;
    options = nameOrOptions.options;
    hooks = nameOrOptions.hooks;
  }
  const newSchema = new mongoose.Schema(schema, options);
  if (hooks)
    hooks(newSchema);
  return mongoose.model(name, newSchema);
}

Promise.resolve().then(function () { return userModel; });
const BriefingSchema = defineMongooseModel({
  name: "Briefing",
  schema: {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    title: {
      type: String,
      required: [true, "Mission title is required!"]
    },
    host: {
      type: String,
      required: [true, "Host is required!"]
    },
    timestamp: {
      type: String,
      required: [true, "Date is required!"]
    },
    desc: {
      type: String,
      required: [true, "Briefing is required!"]
    },
    image: {
      type: String
    },
    status: {
      type: String,
      required: [true, "Status is required!"]
    }
  }
});

const UserSchema = defineMongooseModel({
  name: "User",
  schema: {
    email: {
      type: String,
      unique: [true, "Email already exists!"],
      required: [true, "Email is required!"]
    },
    username: {
      type: String,
      required: [true, "Username is required!"]
    },
    image: {
      type: String
    },
    isAdmin: {
      type: Boolean
    }
  }
});

const userModel = /*#__PURE__*/Object.freeze({
  __proto__: null,
  UserSchema: UserSchema
});

const getServerOrigin = (event) => {
  const envOrigin = process.env.AUTH_ORIGIN;
  if (envOrigin) {
    return envOrigin;
  }
  const runtimeConfigOrigin = useRuntimeConfig().public.auth.computed.origin;
  if (runtimeConfigOrigin) {
    return runtimeConfigOrigin;
  }
  if (event && !isProduction) {
    return getURL(event.node.req, false);
  }
  throw new Error(ERROR_MESSAGES.NO_ORIGIN);
};
const getRequestURLFromRequest = (event, { trustHost }) => {
  if (trustHost) {
    const forwardedValue = getURL(event.node.req);
    if (forwardedValue) {
      return Array.isArray(forwardedValue) ? forwardedValue[0] : forwardedValue;
    }
  }
  let origin;
  try {
    origin = getServerOrigin(event);
  } catch (error) {
    return void 0;
  }
  return joinURL(origin, useRuntimeConfig().public.auth.computed.pathname);
};

function defineNitroPlugin$1(def) {
  return def;
}
const _C9mPPShAGv = defineNitroPlugin$1(() => {
  try {
    getServerOrigin();
  } catch (error) {
    {
      console.info(ERROR_MESSAGES.NO_ORIGIN);
    }
  }
});

function defineNitroPlugin(def) {
  return def;
}
const _LlJrgI5WZN = defineNitroPlugin(() => {
  defineMongooseConnection();
});

const plugins = [
  _k3Yc2qbFb2,
_C9mPPShAGv,
_LlJrgI5WZN
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const sessionConfig = useRuntimeConfig().session.session;
const driver = sessionDriver(sessionConfig.storageOptions.options);
const storage = createStorage({ driver }).mount(sessionConfig.storePrefix, driver);
const sessionStorage = prefixStorage(storage, sessionConfig.storePrefix);

const getStorageSession = (sessionId) => sessionStorage.getItem(sessionId);
const setStorageSession = (sessionId, session) => sessionStorage.setItem(sessionId, session);
const dropStorageSession = (sessionId) => sessionStorage.removeItem(sessionId);

class IpMismatch extends Error {
  constructor(message = "User IP doesn't match the one in session") {
    super(message);
  }
}
class IpMissingFromSession extends Error {
  constructor(message = "No IP in session even though ipPinning is enabled") {
    super(message);
  }
}
class SessionExpired extends Error {
  constructor(message = "Session expired") {
    super(message);
  }
}

const argon2Options = {
  type: argon2.argon2id,
  hashLength: 60
};
const hashIpAddress = (ip) => !ip ? Promise.resolve(void 0) : argon2.hash(ip, argon2Options);
const ipAddressesMatch = (ip, ipHash) => !ip && !ipHash ? Promise.resolve(false) : argon2.verify(ipHash, ip, argon2Options);
const extractIpFromHeader = (header) => {
  if (Array.isArray(header)) {
    return header[0].split(",")[0];
  }
  if (typeof header === "string") {
    return header.split(",")[0];
  }
  return void 0;
};
const getRequestIpAddress = ({ req }) => {
  const sessionOptions = useRuntimeConfig().session.session;
  const headerName = sessionOptions.ipPinning?.headerName;
  if (typeof sessionOptions.ipPinning === "object" && "headerName" in sessionOptions.ipPinning.headerName) {
    return extractIpFromHeader(req.headers[headerName.toLowerCase()]);
  }
  return req.socket.remoteAddress;
};
const getHashedIpAddress = (event) => {
  return hashIpAddress(getRequestIpAddress(event));
};
const processSessionIp = async (event, session) => {
  const hashedIP = session.ip;
  if (!hashedIP) {
    throw new IpMissingFromSession();
  }
  const requestIP = getRequestIpAddress(event);
  const matches = await ipAddressesMatch(requestIP, hashedIP);
  if (!matches) {
    throw new IpMismatch();
  }
};

const SESSION_COOKIE_NAME = "sessionId";
const safeSetCookie = (event, name, value, createdAt) => {
  const sessionOptions = useRuntimeConfig().session.session;
  const expirationDate = sessionOptions.expiryInSeconds !== false ? new Date(createdAt.getTime() + sessionOptions.expiryInSeconds * 1e3) : void 0;
  setCookie(event, name, value, {
    expires: expirationDate,
    secure: sessionOptions.cookieSecure,
    httpOnly: sessionOptions.cookieHttpOnly,
    sameSite: sessionOptions.cookieSameSite,
    domain: sessionOptions.domain || void 0
  });
};
const checkSessionExpirationTime = (session, sessionExpiryInSeconds) => {
  const now = dayjs();
  if (now.diff(dayjs(session.createdAt), "seconds") > sessionExpiryInSeconds) {
    throw new SessionExpired();
  }
};
const getCurrentSessionId = (event) => {
  const sessionIdRequest = parseCookies(event).sessionId;
  const sessionIdContext = event.context.sessionId;
  if (sessionIdContext && sessionIdRequest && sessionIdContext !== sessionIdRequest) {
    return null;
  }
  return sessionIdRequest || sessionIdContext || null;
};
const deleteSession = async (event) => {
  const currentSessionId = getCurrentSessionId(event);
  if (currentSessionId) {
    await dropStorageSession(currentSessionId);
  }
  deleteCookie(event, SESSION_COOKIE_NAME);
};
const newSession = async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const sessionOptions = runtimeConfig.session.session;
  const now = new Date();
  const sessionId = nanoid(sessionOptions.idLength);
  safeSetCookie(event, SESSION_COOKIE_NAME, sessionId, now);
  const session = {
    id: sessionId,
    createdAt: now,
    ip: sessionOptions.ipPinning ? await getHashedIpAddress(event) : void 0
  };
  await setStorageSession(sessionId, session);
  return session;
};
const getSession = async (event) => {
  const existingSessionId = getCurrentSessionId(event);
  if (!existingSessionId) {
    return null;
  }
  const session = await getStorageSession(existingSessionId);
  if (!isSession(session)) {
    return null;
  }
  const runtimeConfig = useRuntimeConfig();
  const sessionOptions = runtimeConfig.session.session;
  const sessionExpiryInSeconds = sessionOptions.expiryInSeconds;
  try {
    if (sessionExpiryInSeconds !== false) {
      checkSessionExpirationTime(session, sessionExpiryInSeconds);
    }
    if (sessionOptions.ipPinning) {
      await processSessionIp(event, session);
    }
  } catch {
    await deleteSession(event);
    return null;
  }
  return session;
};
const updateSessionExpirationDate = (session, event) => {
  const now = new Date();
  safeSetCookie(event, SESSION_COOKIE_NAME, session.id, now);
  return { ...session, createdAt: now };
};
function isSession(shape) {
  return typeof shape === "object" && !!shape && "id" in shape && "createdAt" in shape;
}
const ensureSession = async (event) => {
  const sessionOptions = useRuntimeConfig().session.session;
  let session = await getSession(event);
  if (!session) {
    session = await newSession(event);
  } else if (sessionOptions.rolling) {
    session = updateSessionExpirationDate(session, event);
  }
  event.context.sessionId = session.id;
  event.context.session = session;
  return session;
};
const _UZfLdc = eventHandler(async (event) => {
  await ensureSession(event);
  event.res.on("finish", async () => {
    const session = await getSession(event);
    if (!session) {
      return;
    }
    await setStorageSession(session.id, event.context.session);
  });
});

const checkIfObjectAndContainsIllegalKeys = (shape) => {
  if (typeof shape !== "object" || !shape) {
    return false;
  }
  return !!["id", "createdAt", "ip"].find((key) => Object.prototype.hasOwnProperty.call(shape, key));
};
const _7oIihK = eventHandler(async (event) => {
  const body = await readBody(event);
  if (checkIfObjectAndContainsIllegalKeys(body)) {
    throw createError({ statusCode: 400, message: "Trying to pass invalid data to session, likely an object with `id` or `createdAt` fields or a non-object" });
  }
  event.context.session = {
    ...event.context.session,
    ...body
  };
  return event.context.session;
});

const _8AJXKB = eventHandler(async (event) => {
  await deleteSession(event);
  return null;
});

const _RzbcgA = eventHandler((event) => event.context.session);

const _pXkagm = eventHandler(async (event) => {
  const body = await readBody(event);
  if (checkIfObjectAndContainsIllegalKeys(body)) {
    throw createError({ statusCode: 400, message: "Trying to pass invalid data to session, likely an object with `id` or `createdAt` fields or a non-object" });
  }
  event.context.session = {
    ...body,
    id: event.context.session.id,
    createdAt: event.context.session.createdAt,
    ip: event.context.session.ip
  };
  return event.context.session;
});

const transport = nodemailer.createTransport(options.smtp);
const _DaAakc = defineEventHandler(async event => {
  try {
    await send$1(await readBody(event), options, transport);
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
  return '';
});

const _lazy_rL8vIu = () => Promise.resolve().then(function () { return _____; });
const _lazy_7iwZbX = () => Promise.resolve().then(function () { return index$7; });
const _lazy_US74y4 = () => Promise.resolve().then(function () { return index$5; });
const _lazy_lCeCs0 = () => Promise.resolve().then(function () { return index$3; });
const _lazy_Td16A9 = () => Promise.resolve().then(function () { return index$1; });
const _lazy_16Qs8o = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/auth/**', handler: _lazy_rL8vIu, lazy: true, middleware: false, method: undefined },
  { route: '/api/briefings/:id', handler: _lazy_7iwZbX, lazy: true, middleware: false, method: undefined },
  { route: '/api/briefings', handler: _lazy_US74y4, lazy: true, middleware: false, method: undefined },
  { route: '/api/briefings/new', handler: _lazy_lCeCs0, lazy: true, middleware: false, method: undefined },
  { route: '/api/users/briefings', handler: _lazy_Td16A9, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_16Qs8o, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _UZfLdc, lazy: false, middleware: true, method: undefined },
  { route: '/api/session', handler: _7oIihK, lazy: false, middleware: false, method: "patch" },
  { route: '/api/session', handler: _8AJXKB, lazy: false, middleware: false, method: "delete" },
  { route: '/api/session', handler: _RzbcgA, lazy: false, middleware: false, method: "get" },
  { route: '/api/session', handler: _pXkagm, lazy: false, middleware: false, method: "post" },
  { route: '/mail/send', handler: _DaAakc, lazy: false, middleware: false, method: "post" },
  { route: '/**', handler: _lazy_16Qs8o, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (a) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

let preparedAuthHandler;
let usedSecret;
const SUPPORTED_ACTIONS = ["providers", "session", "csrf", "signin", "signout", "callback", "verify-request", "error", "_log"];
const useConfig = () => useTypedBackendConfig(useRuntimeConfig());
const readBodyForNext = async (event) => {
  let body;
  if (isMethod(event, "PATCH") || isMethod(event, "POST") || isMethod(event, "PUT") || isMethod(event, "DELETE")) {
    body = await readBody(event);
  }
  return body;
};
const parseActionAndProvider = ({ context }) => {
  const params = context.params?._?.split("/");
  if (!params || ![1, 2].includes(params.length)) {
    throw createError({ statusCode: 400, statusMessage: `Invalid path used for auth-endpoint. Supply either one path parameter (e.g., \`/api/auth/session\`) or two (e.g., \`/api/auth/signin/github\` after the base path (in previous examples base path was: \`/api/auth/\`. Received \`${params}\`` });
  }
  const [unvalidatedAction, providerId] = params;
  const action = SUPPORTED_ACTIONS.find((action2) => action2 === unvalidatedAction);
  if (!action) {
    throw createError({ statusCode: 400, statusMessage: `Called endpoint with unsupported action ${unvalidatedAction}. Only the following actions are supported: ${SUPPORTED_ACTIONS.join(", ")}` });
  }
  return { action, providerId };
};
const NuxtAuthHandler = (nuxtAuthOptions) => {
  usedSecret = nuxtAuthOptions?.secret;
  if (!usedSecret) {
    {
      console.info(ERROR_MESSAGES.NO_SECRET);
      usedSecret = "secret";
    }
  }
  const options = defu$1(nuxtAuthOptions, {
    secret: usedSecret,
    logger: void 0,
    providers: [],
    trustHost: useConfig().trustHost
  });
  const getInternalNextAuthRequestData = async (event) => {
    const nextRequest = {
      host: getRequestURLFromRequest(event, { trustHost: useConfig().trustHost }),
      body: void 0,
      cookies: parseCookies(event),
      query: void 0,
      headers: getHeaders(event),
      method: getMethod(event),
      providerId: void 0,
      error: void 0
    };
    if (event.context.checkSessionOnNonAuthRequest === true) {
      return {
        ...nextRequest,
        method: "GET",
        action: "session"
      };
    }
    const query = getQuery$1(event);
    const { action, providerId } = parseActionAndProvider(event);
    const error = query.error;
    if (Array.isArray(error)) {
      throw createError({ statusCode: 400, statusMessage: "Error query parameter can only appear once" });
    }
    const body = await readBodyForNext(event);
    return {
      ...nextRequest,
      body,
      query,
      action,
      providerId,
      error: String(error) || void 0
    };
  };
  const handler = eventHandler(async (event) => {
    const { res } = event.node;
    const nextRequest = await getInternalNextAuthRequestData(event);
    const nextResult = await AuthHandler({
      req: nextRequest,
      options
    });
    if (nextResult.status) {
      res.statusCode = nextResult.status;
    }
    nextResult.cookies?.forEach((cookie) => setCookie(event, cookie.name, cookie.value, cookie.options));
    nextResult.headers?.forEach((header) => appendHeader(event, header.key, header.value));
    if (!nextResult.redirect) {
      return nextResult.body;
    }
    if (nextRequest.body?.json) {
      return { url: nextResult.redirect };
    }
    return sendRedirect(event, nextResult.redirect);
  });
  if (preparedAuthHandler) {
    console.warn("You setup the auth handler for a second time - this is likely undesired. Make sure that you only call `NuxtAuthHandler( ... )` once");
  }
  preparedAuthHandler = handler;
  return handler;
};

const handler = NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  providers: [
    DiscordProvider.default({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization: process.env.DISCORD_AUTHORIZATION,
      token: "https://discord.com/api/oauth2/token",
      userinfo: "https://discord.com/api/users/@me"
    })
  ],
  callbacks: {
    async session({ session, token }) {
      const sessionUser = await UserSchema.findOne({ email: session.user.email });
      session.accessToken = token.access_token;
      session.user.id = sessionUser._id.toString();
      session.user.isAdmin = sessionUser.isAdmin;
      return { ...session, isAdmin: true };
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token = Object.assign({}, token, { access_token: account.access_token });
      }
      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      var returnValue = false;
      try {
        const userExists = await UserSchema.findOne({ email: user.email });
        const guildResponse = await fetch("https://discord.com/api/users/@me/guilds", { headers: { Authorization: "Bearer " + account.access_token } });
        const guilds = await guildResponse.json();
        var isAdmin = false;
        for (let i = 0; i < guilds.length; i++) {
          if (guilds[i].id == "282514718445273089") {
            const roleResponse = await fetch(`https://discord.com/api/users/@me/guilds/${guilds[i].id}/member`, { headers: { Authorization: "Bearer " + account.access_token } });
            const memberInfo = await roleResponse.json();
            for (let j = 0; j < memberInfo.roles.length; j++) {
              if (memberInfo.roles[j] == "598258350718713864") {
                returnValue = true;
              }
              if (memberInfo.roles[j] == "714949430649815140") {
                isAdmin = true;
              }
            }
          }
          ;
        }
        if (!userExists && returnValue) {
          await UserSchema.create({
            email: user.email,
            username: user.name,
            image: user.image,
            isAdmin
          });
        }
        return returnValue;
      } catch (error) {
        console.log("Error checking if user exists:\n- ", error.message);
        return returnValue;
      }
    }
  }
});

const _____ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: handler
});

const index$6 = defineEventHandler(async (event) => {
  if (event.req.method == "GET") {
    const params = getRouterParams(event);
    try {
      const data = await BriefingSchema.findOne({ _id: params.id }).populate({ path: "creator" });
      return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
      return new Response("Error fetching briefing:\n" + error, { status: 500 });
    }
  }
  if (event.req.method == "PATCH") {
    const params = getRouterParams(event);
    const body = JSON.parse(await readBody(event));
    const { creator, title, host, timestamp, desc, image, status } = body;
    try {
      const briefing = await BriefingSchema.findOne({ _id: params.id });
      if (!briefing) {
        return new Response("Briefing not found", { status: 404 });
      }
      briefing.title = title;
      briefing.host = host;
      briefing.timestamp = timestamp;
      briefing.desc = desc;
      briefing.image = image;
      briefing.status = status;
      await briefing.save();
      return new Response(JSON.stringify(briefing), { status: 200 });
    } catch (error) {
      return new Response("Failed to edit briefing:\n" + error, { status: 500 });
    }
  }
  if (event.req.method == "DELETE") {
    try {
      const params = getRouterParams(event);
      const briefing = await BriefingSchema.findByIdAndDelete({ _id: params.id });
      return new Response("Briefing removed!", { status: 200 });
    } catch (error) {
      return new Response("Failed to delete briefing:\n" + error, { status: 500 });
    }
  }
});

const index$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index$6
});

const index$4 = defineEventHandler(async (event) => {
  if (event.req.method == "GET") {
    const nextWeek = Date.parse(/* @__PURE__ */ new Date()) + 604800 * 1e3;
    const params = getQuery$1(event);
    try {
      const title = new RegExp(params.searchQuery, "i");
      const host = new RegExp(params.searchQuery, "i");
      const sort = params.orderBy == "Descending" ? "descending" : "ascending";
      const filter = params.filterBy;
      let data = [];
      let dataCount = 0;
      if (filter == 0) {
        data = await BriefingSchema.find({ $or: [{ title }, { host }] }).lte("timestamp", nextWeek).populate({ path: "creator" }).limit(10).skip((params.page - 1) * params.pageLimit).sort({ timestamp: sort });
        dataCount = await BriefingSchema.countDocuments({ $or: [{ title }, { host }] }).lte("timestamp", nextWeek);
      } else if (filter == 1) {
        data = await BriefingSchema.find({ $or: [{ title }, { host }] }).gt("timestamp", nextWeek).populate({ path: "creator" }).limit(10).skip((params.page - 1) * params.pageLimit).sort({ timestamp: sort });
        dataCount = await BriefingSchema.countDocuments({ $or: [{ title }, { host }] }).gt("timestamp", nextWeek);
      } else if (filter == 2) {
        data = await BriefingSchema.find({ $or: [{ title }, { host }] }).populate({ path: "creator" }).limit(10).skip((params.page - 1) * params.pageLimit).sort({ timestamp: sort });
        dataCount = await BriefingSchema.countDocuments({ $or: [{ title }, { host }] });
      }
      return new Response(JSON.stringify([data, dataCount]), { status: 200 });
    } catch (error) {
      return new Response("Error fetching all briefings:\n" + error, { status: 500 });
    }
  }
});

const index$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index$4
});

const index$2 = defineEventHandler(async (event) => {
  if (event.req.method == "POST") {
    const body = JSON.parse(await readBody(event));
    const { creator, title, host, timestamp, desc, image, status } = body;
    try {
      const newBriefing = new BriefingSchema({
        creator,
        title,
        host,
        timestamp,
        desc,
        image,
        status
      });
      await newBriefing.save();
      return new Response(JSON.stringify(newBriefing), { status: 201 });
    } catch (error) {
      return new Response("Failed to create briefing:\n" + error, { status: 500 });
    }
  }
});

const index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index$2
});

const index = defineEventHandler(async (event) => {
  if (event.req.method == "GET") {
    const nextWeek = Date.parse(/* @__PURE__ */ new Date()) + 604800 * 1e3;
    const params = getQuery$1(event);
    try {
      const title = new RegExp(params.searchQuery, "i");
      const host = new RegExp(params.searchQuery, "i");
      const sort = params.orderBy == "Descending" ? "descending" : "ascending";
      const filter = params.filterBy;
      const creator = params.creatorId;
      let data = [];
      let dataCount = 0;
      if (filter == 0) {
        data = await BriefingSchema.find({ $or: [{ title }, { host }], $and: [{ creator }] }).lte("timestamp", nextWeek).populate({ path: "creator" }).limit(10).skip((params.page - 1) * params.pageLimit).sort({ timestamp: sort });
        dataCount = await BriefingSchema.countDocuments({ $or: [{ title }, { host }], $and: [{ creator }] }).lte("timestamp", nextWeek);
      } else if (filter == 1) {
        data = await BriefingSchema.find({ $or: [{ title }, { host }], $and: [{ creator }] }).gt("timestamp", nextWeek).populate({ path: "creator" }).limit(10).skip((params.page - 1) * params.pageLimit).sort({ timestamp: sort });
        dataCount = await BriefingSchema.countDocuments({ $or: [{ title }, { host }], $and: [{ creator }] }).gt("timestamp", nextWeek);
      } else if (filter == 2) {
        data = await BriefingSchema.find({ $or: [{ title }, { host }], $and: [{ creator }] }).populate({ path: "creator" }).limit(10).skip((params.page - 1) * params.pageLimit).sort({ timestamp: sort });
        dataCount = await BriefingSchema.countDocuments({ $or: [{ title }, { host }], $and: [{ creator }] });
      }
      return new Response(JSON.stringify([data, dataCount]), { status: 200 });
    } catch (error) {
      return new Response("Error fetching creator briefings:\n" + error, { status: 500 });
    }
  }
});

const index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: index
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]};

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file://D:/Projects/Web%20Dev/fu-mission-board-nuxt/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag}${` id="${appRootId}"` }>${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set()
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const isRenderingIsland = false ;
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !isRenderingIsland;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  {
    head.push(appHead, headEntryOptions);
  }
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !isRenderingIsland || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  {
    const link = [];
    for (const style in styles) {
      const resource = styles[style];
      {
        link.push({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) });
      }
    }
    head.push({ link }, headEntryOptions);
  }
  if (!NO_SCRIPTS && !isRenderingIsland) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts && !isRenderingIsland) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: isRenderingIsland,
    htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
