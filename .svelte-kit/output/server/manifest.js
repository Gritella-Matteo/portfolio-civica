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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/portfolio-civica/","/portfolio-civica/chi-sono","/portfolio-civica/educazione-civica"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
