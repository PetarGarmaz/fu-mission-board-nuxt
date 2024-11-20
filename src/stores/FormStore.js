import { makeAutoObservable } from 'mobx';

class FormStore {
	type = "";
	date = new Date();
	disabledDates = null;
	briefing = {
		creator: "",
		title: "",
		host: "",
		timestamp: "",
		desc: "",
		image: "",
		status: "",
	};
	showPreview = false;

	constructor () {
		makeAutoObservable(this);
	}

	toggleShowPreview = () => {
		this.showPreview = !this.showPreview;
	};

	setType = (val) => {
		this.type = val;
	};

	setDate = (val) => {
		this.date = val;
	};

	setDisabledDates = (val) => {
		this.disabledDates = val;
	};

	setBriefing = (val) => {
		this.briefing = val;
	};

	setAllBriefing = (val) => {
		this.allBriefings = val;
	};

	getDisabledDates = (allBriefings) => {
		var dates = [];

		for (let i = 0; i < allBriefings.length; i++) {
			const postDate = new Date(parseInt(allBriefings[i].timestamp));
			dates.push(postDate);
		};

		return dates;
	};

	handleSubmit = async (e, session) => {
		e.preventDefault();

		try {
			//const offset = (this.date.getTimezoneOffset() / 60);
			//console.log(offset);
			const timestamp = this.date.setUTCHours(19,0,0,0);
			this.setBriefing({...this.briefing, creator: session.user.id, timestamp: timestamp});
			
			const result = await fetch("/api/briefings/new", {
				method: "POST", 
				body: JSON.stringify(this.briefing)
			});

			const data = await result.json();

			this.handleDiscordMessage(data);
		} catch (error) {
			console.log(error);
		}
	}

	handleDiscordMessage = async (data) => {
		try {
			const editedDescription = data.desc.replace(/___/g, '');
			const message = {
				"attachments": [],
				"content": `<@&598258350718713864>\n\n**${data.host}** has posted a new briefing!\n\n[<<< Click here for more mission details >>>](https://a3.fugaming.org/briefings/${data._id}\n\n)`,
				"embeds": [
					{
						"title": `${data.title}\nHost: ${data.host}\n-----------------------------------\n<t:${data.timestamp / 1000}:F>`,
						"description": `${editedDescription}`,
						"color": 16711680,
						"image": {
							"url": `${data.image}`
						}
					}
				]
			};

			await fetch(process.env.DISCORD_MISSIONS_WEBHOOK, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(message),
			})
		} catch (error) {
			console.log(error);
		}
	}

	handleEdit = async (e, briefingId) => {
		e.preventDefault();

		try {
			await fetch("/api/briefings/" + briefingId, {
				method: "PATCH",
				body: JSON.stringify(this.briefing),
			})
		} catch (error) {
			console.log(error);
		}
	}

	handleDelete = async (briefingId) => {
		try {
			await fetch("/api/briefings/" + briefingId, {
				method: "DELETE"
			})
		} catch (error) {
			console.log(error);
		}
	}

	getBriefing = async (briefingId) => {
		const res = await $fetch('/api/briefings/' + briefingId, {
			method: "GET"
		});

		const data = JSON.parse(res);
		this.setBriefing(data);
		console.log(data);
	};
}

export default new FormStore();