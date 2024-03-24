const filterBriefings = (briefing, params) => {
	var showBriefing = true;
	const nextWeek = Date.parse(new Date()) + 604800 * 1000; //Get next week

	if(briefing.title.toLowerCase().includes(params.searchQuery.toLowerCase()) || briefing.host.toLowerCase().includes(params.searchQuery.toLowerCase())) {
		if(parseInt(briefing.timestamp) > nextWeek) {
			if(params.showFuture == "false") {
				showBriefing = false;
			};
		} else {
			if(briefing.status.toLowerCase().includes("completed")) {
				if(params.showCompleted == "false") {
					showBriefing = false;
				}
			} else if (briefing.status.toLowerCase().includes("failed")) {
				if(params.showFailed == "false") {
					showBriefing = false;
				}
			} else {
				if(params.showCurrent == "false") {
					showBriefing = false;
				}
			}
		}
	}	

	return showBriefing;
};

export default defineEventHandler(async (event) => {
	if (event.req.method == 'GET') {
		const params = getQuery(event);
		
		
		/*
		const params = getQuery(event);

		const countDocs = await BriefingSchema.countDocuments();
		
		//const aggregate = BriefingSchema.aggregate([
		//	{ $match: (briefing) => filterBriefings(briefing, params) },
		//	{ $skip: (params.page - 1) * 10 },
		//	{ $sort: {timestamp : -1}}
		//]);
		//console.log(aggregate);

		const data = await BriefingSchema.find({}).populate({path:"creator"}).limit(10).skip((params.page - 1) * 10).sort({timestamp : -1}).then(briefings => {return briefings.filter(briefing => filterBriefings(briefing, params))});
		const otherData = await BriefingSchema.find().populate({path:"creator"}).limit(10).skip((params.page - 1) * 10).sort({timestamp : -1});

		console.log(typeof data);
		console.log(typeof otherData)

		//const data = await BriefingSchema.find().agregate().populate({path:"creator"}).match(briefing => filterBriefings(briefing, params)).limit(10).skip((params.page - 1) * 10).sort({timestamp : -1});
		//console.log(data);
		//const data = await BriefingSchema.find().populate({path:"creator"}).limit(10).skip((params.page - 1) * 10).sort({timestamp : -1});

		//const sortedData = filterBriefings(data, params.searchQuery, params.sortBy, params.orderBy, params.show);
		return [data, countDocs];
		*/
	}
})