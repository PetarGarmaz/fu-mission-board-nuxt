export default defineEventHandler(async (event) => {
	if (event.req.method == 'GET') {
		const params = getQuery(event);
		const data = await BriefingSchema.find({creator: params.creator}).populate({path:"creator"});

		return new Response(JSON.stringify(data), {status: 200});
	}
})