export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio-civica/_app",
	assets: new Set(["foto.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BddksNqe.js",app:"_app/immutable/entry/app.CQypZHGN.js",imports:["_app/immutable/entry/start.BddksNqe.js","_app/immutable/chunks/CPJyJBqF.js","_app/immutable/chunks/Fo4gzBod.js","_app/immutable/chunks/NucEI1WA.js","_app/immutable/chunks/D9A_9Bd0.js","_app/immutable/entry/app.CQypZHGN.js","_app/immutable/chunks/Fo4gzBod.js","_app/immutable/chunks/CwyN8p-Z.js","_app/immutable/chunks/D9A_9Bd0.js","_app/immutable/chunks/B-cX6ro3.js","_app/immutable/chunks/DfXAqxJO.js","_app/immutable/chunks/NucEI1WA.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/chi-sono",
				pattern: /^\/chi-sono\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/educazione-civica",
				pattern: /^\/educazione-civica\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
