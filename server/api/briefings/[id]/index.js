export default defineEventHandler(async (event) => {
	if (event.req.method == 'GET') {
		const params = getRouterParams(event);

		try {
			const data = await BriefingSchema.findOne({_id: params.id}).populate({path:"creator"});
			
			return new Response(JSON.stringify(data), {status: 200});
		} catch (error) {
			return new Response("Error fetching briefing:\n" + error, {status: 500});
		}
	}

	if (event.req.method == 'PATCH') {
		const params = getRouterParams(event);
		const body = JSON.parse(await readBody(event));
		const {creator, title, host, timestamp, desc, image, status} = body;

		try {
			const briefing = await BriefingSchema.findOne({_id: params.id});

			if(!briefing) {
				return new Response("Briefing not found", {status:404})
			}

			briefing.title = title;
			briefing.host = host;
			briefing.timestamp = timestamp;
			briefing.desc = desc;
			briefing.image = image;
			briefing.status = status;

			await briefing.save();

			return new Response(JSON.stringify(briefing), {status:200})
		} catch (error) {
			return new Response("Failed to edit briefing:\n" + error, {status: 500})
		}
	}

	if (event.req.method == "DELETE") {
		try {
			const params = getRouterParams(event);
			const briefing = await BriefingSchema.findByIdAndDelete({_id: params.id});

			return new Response("Briefing removed!", {status:200});
		} catch (error) {
			return new Response("Failed to delete briefing:\n" + error, {status: 500})
		}
	}
})