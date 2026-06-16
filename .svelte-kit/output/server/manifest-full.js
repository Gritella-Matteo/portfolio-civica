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
		client: {start:"_app/immutable/entry/start.Dlxu7Qrh.js",app:"_app/immutable/entry/app.CvNK3077.js",imports:["_app/immutable/entry/start.Dlxu7Qrh.js","_app/immutable/chunks/faStanBQ.js","_app/immutable/chunks/CBfLJkDL.js","_app/immutable/chunks/CPcsCdbG.js","_app/immutable/chunks/BnrDXJHN.js","_app/immutable/entry/app.CvNK3077.js","_app/immutable/chunks/CBfLJkDL.js","_app/immutable/chunks/CBrg7C8S.js","_app/immutable/chunks/CPcsCdbG.js","_app/immutable/chunks/BctG4Rd6.js","_app/immutable/chunks/BftfPX7G.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
