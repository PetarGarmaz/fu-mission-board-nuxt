export default defineEventHandler(async (event) => {
	if (event.req.method == 'POST') {
		const body = JSON.parse(await readBody(event));
		const {creator, title, host, timestamp, desc, image, status} = body;

		try {
			const newBriefing = new BriefingSchema({
				creator: creator,
				title: title, 
				host: host,
				timestamp: timestamp,
				desc: desc,
				image: image,
				status: status
			});

			await newBriefing.save();

			return new Response(JSON.stringify(newBriefing), {status: 201})
		} catch (error) {
			return new Response("Failed to create briefing", {status: 500})
		}
	}
})