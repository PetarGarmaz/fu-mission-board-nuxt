async function authorize(req) {
	return new Promise((resolve) => {
		if(req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
			resolve(true);
		} else {
			resolve(false);
		};
	});
};

async function getAllBriefings() {
	const req = "/api/briefings?";
	const res = await $fetch(req, {
		method: "GET",
		query: {
			page: 1,
			pageLimit: 10,
			searchQuery: "",
			filterBy: 2,
			orderBy: "Descending",
			creatorId: ""
		}
	});

	const data = JSON.parse(res);
	const timestamps = data[0].map(item => item.timestamp);

	return timestamps;
};

export default async function handler(req, res) {
	const response = await authorize(req);

	if (response) {
		return new Response("Unauthorized", {status: 401});
	} else {
		const allBriefings = await getAllBriefings();
		const emojis = ["one", "two", "three", "four", "five", "six", "seven"]; //7 available, just in case (literally not possible to have more than 5)
		let currentDate = new Date();
		var messageEmbeds = [];
		var fridays = [];
		
		for (let i = currentDate.getDate(); i <= 31; i++) {
			let newDate = new Date(currentDate);
			newDate.setDate(i);
			newDate.setUTCHours(19,0,0,0);

			const newDateTimestamp = Math.round(newDate.getTime() / 1000);

			console.log(newDateTimestamp);
			console.log(allBriefings.includes((newDateTimestamp * 1000).toString()));


			if(newDate.getDay() == 5 && !allBriefings.includes((newDateTimestamp * 1000).toString())) {
				fridays.push(newDateTimestamp);
			};
		};

		for (let i = 0; i <= fridays.length - 1; i++) {
			const embed = {
				"title": "",
				"description": `React with :${emojis[i]}: for <t:${fridays[i]}:F>`,
				"color": 16711680,
			};

			messageEmbeds.push(embed);
		};

		const message = {
			"attachments": [],
			"content": "<@&598258350718713864>\n\nSchedule time! Here are the available mission slots this month:",
			"embeds": messageEmbeds
		};

		await fetch(process.env.VITE_DISCORD_MISSIONS_WEBHOOK, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(message),
		});

		return new Response("Nice!", {status: 200});
	};
};