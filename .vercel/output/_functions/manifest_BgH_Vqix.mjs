import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DS7bj_eW.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_BEKT1gxf.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/josecarlosmorenomartin/Documents/ASTRO/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/Astro/_astro/index.FjYyXIWJ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://mrharvyson.github.io","base":"/Astro","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/josecarlosmorenomartin/Documents/ASTRO/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/josecarlosmorenomartin/Documents/ASTRO/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BzpcuTor.mjs","\u0000@astrojs-manifest":"manifest_BgH_Vqix.mjs","/Users/josecarlosmorenomartin/Documents/ASTRO/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DbwMOGcz.js","/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.CmOoRf5s.js","/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Intro.astro?astro&type=script&index=0&lang.ts":"_astro/Intro.astro_astro_type_script_index_0_lang.DlcnlBEV.js","/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Experience.astro?astro&type=script&index=0&lang.ts":"_astro/Experience.astro_astro_type_script_index_0_lang.trZ4U7nc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Nav.astro?astro&type=script&index=0&lang.ts","const r=document.querySelector(\".barra__links\"),c=document.querySelectorAll(\".barra__link\"),s=document.querySelectorAll(\".barra__logo\");r.addEventListener(\"click\",function(o){const t=o.target;t.getAttribute(\"data-ref\"),t.classList.contains(\"barra__link\")&&(c.forEach(function(a){a.classList.remove(\"barra__link--active\")}),t.classList.add(\"barra__link--active\"))});r.addEventListener(\"mouseover\",function(o){const t=o.target;t.classList.contains(\"barra__link\")&&(c.forEach(function(a){a.classList.add(\"opacity\")}),t.classList.remove(\"opacity\"),s.forEach(function(a){a.classList.add(\"opacity\")}))});r.addEventListener(\"mouseout\",function(o){o.target.classList.contains(\"barra__link\")&&(c.forEach(function(a){a.classList.remove(\"opacity\")}),s.forEach(function(a){a.classList.remove(\"opacity\")}))});window.addEventListener(\"scroll\",function(){window.scrollY>=75?(document.querySelector(\".barra\").classList.add(\"scrollnav--claro\"),document.querySelector(\".barra\").classList.remove(\"scrollnav--oscuro\")):(document.querySelector(\".barra\").classList.remove(\"scrollnav--claro\"),document.querySelector(\".barra\").classList.add(\"scrollnav--oscuro\"))});"],["/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Intro.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",function(t){t.preventDefault(),document.querySelector(this.getAttribute(\"href\")).scrollIntoView({behavior:\"smooth\"})})});"],["/Users/josecarlosmorenomartin/Documents/ASTRO/src/components/Experience.astro?astro&type=script&index=0&lang.ts","const s=document.querySelector(\".cards\");s.addEventListener(\"mouseover\",function(t){const e=t.target.closest(\".card\");if(e){e.classList.remove(\"opacity\");const o=e.querySelector(\".blanco\"),c=e.querySelector(\".color\");o.classList.add(\"hidden\"),c.classList.remove(\"hidden\")}});s.addEventListener(\"mouseout\",function(t){const e=t.target.closest(\".card\");if(e){e.classList.remove(\"opacity\");const o=e.querySelector(\".blanco\");e.querySelector(\".color\").classList.add(\"hidden\"),o.classList.remove(\"hidden\")}});"]],"assets":["/Astro/_astro/index.FjYyXIWJ.css","/Astro/_astro/Layout.astro_astro_type_script_index_0_lang.DbwMOGcz.js","/Astro/mocks/experiencia.json","/Astro/images/animum.png","/Astro/images/boneBlanco.png","/Astro/images/cursorA.png","/Astro/images/cursorB.png","/Astro/images/deloitte_blanco.png","/Astro/images/favicon.svg","/Astro/images/foto.png","/Astro/images/fotoD.png","/Astro/images/fotoD2.png","/Astro/images/fotoD3.png","/Astro/images/fotoG.png","/Astro/images/logoWhitelineBlanco.png","/Astro/images/logoWhitelineColor.png","/Astro/images/penduloBlanco.png","/Astro/images/vedrunaBlanco.png","/Astro/images/vedrunaColor.png","/Astro/images/viewnextBlanco.png","/Astro/images/viewnextColor.png","/Astro/images/whiteBlanco.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"tu25OSGebGgXWsgmOWqQiadGMXM6NuMat+QaWr2go7c="});

export { manifest };
