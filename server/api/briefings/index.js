export default defineEventHandler(async (event) => {
	if (event.req.method == 'GET') {
		const nextWeek = Date.parse(new Date()) + 604800 * 1000;
		const params = getQuery(event);

		try {
			const title = new RegExp(params.searchQuery, "i");
			const host = new RegExp(params.searchQuery, "i");
			const sort = params.orderBy == "Descending" ? "descending" : "ascending";
			const filter = params.filterBy;
			let data = [];
			let dataCount = 0;

			if(filter == 0) {
				data = await BriefingSchema.find({$or: [{title}, {host}]}).lte("timestamp", nextWeek).populate({path:"creator"}).limit(10).skip((params.page - 1) * params.pageLimit).sort({timestamp : sort});
				dataCount = await BriefingSchema.countDocuments({$or: [{title}, {host}]}).lte("timestamp", nextWeek);
			} else if(filter == 1) {
				data = await BriefingSchema.find({$or: [{title}, {host}]}).gt("timestamp", nextWeek).populate({path:"creator"}).limit(10).skip((params.page - 1) * params.pageLimit).sort({timestamp : sort});
				dataCount = await BriefingSchema.countDocuments({$or: [{title}, {host}]}).gt("timestamp", nextWeek);
			} else if(filter == 2) {
				data = await BriefingSchema.find({$or: [{title}, {host}]}).populate({path:"creator"}).limit(10).skip((params.page - 1) * params.pageLimit).sort({timestamp : sort});
				dataCount = await BriefingSchema.countDocuments({$or: [{title}, {host}]});
			}
			
			
			return new Response(JSON.stringify([data, dataCount]), {status: 200});
		} catch (error) {
			return new Response("Error fetching all briefings:\n" + error, {status: 500});
		}
	};
})