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

	constructor () {
		makeAutoObservable(this);
	}

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
			const timestamp = this.date.setUTCHours(18,0,0,0);
			this.setBriefing({...this.briefing, creator: session.user.id, timestamp: timestamp});
			
			await fetch("/api/briefings/new", {
				method: "POST", 
				body: JSON.stringify(this.briefing)
			})
		} catch (error) {
			console.log(error);
		}
	}

	handleEdit = async (e, session, briefingId) => {
		e.preventDefault();

		try {
			//const offset = (this.date.getTimezoneOffset() / 60);
			//console.log(offset);
			const timestamp = this.date.setUTCHours(18,0,0,0);
			this.setBriefing({...this.briefing, creator: session.user.id, timestamp: timestamp});
			
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
	};
}

export default new FormStore();