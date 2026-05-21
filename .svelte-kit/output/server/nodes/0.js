import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D3t8wf9i.js","_app/immutable/chunks/CYVjAGAM.js","_app/immutable/chunks/BdC8REUv.js","_app/immutable/chunks/CQCuY-PL.js","_app/immutable/chunks/DBtBLHhN.js","_app/immutable/chunks/BIo9ioC6.js","_app/immutable/chunks/Vrwtrj9M.js","_app/immutable/chunks/B56mR66f.js","_app/immutable/chunks/80fr31g2.js","_app/immutable/chunks/XQWTCKJb.js"];
export const stylesheets = ["_app/immutable/assets/0.B4j9yg51.css"];
export const fonts = [];
