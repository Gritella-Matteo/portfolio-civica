import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DmSOWsXV.js","_app/immutable/chunks/CBrg7C8S.js","_app/immutable/chunks/CBfLJkDL.js","_app/immutable/chunks/BKGvJ3WS.js","_app/immutable/chunks/BftfPX7G.js","_app/immutable/chunks/CPcsCdbG.js","_app/immutable/chunks/CaDnwCyc.js","_app/immutable/chunks/aUQ5oIpl.js"];
export const stylesheets = ["_app/immutable/assets/0.B4j9yg51.css"];
export const fonts = [];
