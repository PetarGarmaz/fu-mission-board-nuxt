const filterBriefings = (data, query, sort, order, future) => {
	const regex = new RegExp(query, "i");
	const nextWeek = Date.parse(new Date()) + 604800 * 1000; //Get next week
	var sortedData = data.filter((item) => (regex.test(item.host) || regex.test(item.title) || regex.test(item.desc) || regex.test(item.status)));

	sortedData = sortedData.filter((item) => future ? (item) : (parseInt(item.timestamp) < nextWeek)); // Filter out future missions (excluding next mission)

	for (let i = 0; i < sortedData.length; i++) {
		for (let j = 0; j < sortedData.length; j++) {
			if(sort == "Title") {
				let titleI = sortedData[i].title;
				let titleJ = sortedData[j].title;

				if(order == "Desc") {
					if(titleI < titleJ) {
						var tempData = sortedData[i];
						sortedData[i] = sortedData[j];
						sortedData[j] = tempData;
					};
				} else {
					if(titleI > titleJ) {
						var tempData = sortedData[i];
						sortedData[i] = sortedData[j];
						sortedData[j] = tempData;
					};	
				}
			} else if (sort == "Date") {
				let parsedDateI = parseInt(sortedData[i].timestamp);
				let parsedDateJ = parseInt(sortedData[j].timestamp);

				if(order == "Desc") {
					if(parsedDateI > parsedDateJ) {
						var tempData = sortedData[i];
						sortedData[i] = sortedData[j];
						sortedData[j] = tempData;
					};
				} else {
					if(parsedDateI < parsedDateJ) {
						var tempData = sortedData[i];
						sortedData[i] = sortedData[j];
						sortedData[j] = tempData;
					};	
				}
			};
		};
	};
	
	return sortedData;
};

export default defineEventHandler(async (event) => {
	console.log(event.req.method);

	if (event.req.method == 'GET') {
		const data = await BriefingSchema.find().populate({path:"creator"});
		const params = getQuery(event);

		const sortedData = filterBriefings(data, params.searchQuery, params.sortBy, params.orderBy, params.includeFuture);
		
		return sortedData;
	}
})