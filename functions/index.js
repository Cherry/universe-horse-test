export async function onRequest({request, next, env}){
	const url = new URL(request.url);
	if(url.searchParams.has('test')){
		const lookupFile = new URL(request.url);
		lookupFile.pathname = './test.html';
		const lookupReq = new Request(lookupFile.toString(), {
			cf: request.cf
		});
		const asset = await env.ASSETS.fetch(lookupReq);
		return asset;
	}
	return next();
}