import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.kNtp2zF6.js","_app/immutable/chunks/CwyN8p-Z.js","_app/immutable/chunks/Fo4gzBod.js","_app/immutable/chunks/BgpLM_Dw.js","_app/immutable/chunks/DfXAqxJO.js","_app/immutable/chunks/NucEI1WA.js","_app/immutable/chunks/CHucL4ot.js","_app/immutable/chunks/CPJyJBqF.js","_app/immutable/chunks/D9A_9Bd0.js"];
export const stylesheets = ["_app/immutable/assets/0.B4j9yg51.css"];
export const fonts = [];
