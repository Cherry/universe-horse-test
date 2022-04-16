export async function onRequest({request, next, env}){
	const url = new URL(request.url);
	if(url.searchParams.has('test')){
		const lookupFile = new URL(request.url);
		lookupFile.pathname = './test.html';
		const asset = await env.ASSETS.fetch(lookupFile);
		return asset;
	}
	return next();
}