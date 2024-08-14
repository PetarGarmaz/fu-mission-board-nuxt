import { makeAutoObservable } from 'mobx';

class BriefingStore {
	allBriefings = [];
	briefing = {};
	query = "";
	filter = "Present & Past Missions";
	filterType = 0;
	order = "Descending";
	currentPage = 1;
	maxPages = 1;

	constructor () {
		makeAutoObservable(this);
	}

	setAllBriefing = (val) => {
		this.allBriefings = val;
	};

	setBriefing = (val) => {
		this.briefing = val;
	};

	setQuery = (val) => {
		this.query = val;
	};

	setFilter = (val) => {
		this.filter = val;
	};

	setFilterType = (val, type, profileId) => {
		this.filterType = val;
		this.setFilter(['Present & Past Missions', 'Future Missions', 'All Missions'][val]);
		this.getBriefings(type, profileId);
	};

	setOrder = (val, type, profileId) => {
		this.order = val;
		this.getBriefings(type, profileId)
	};

	setMaxPages = (val) => {
		this.maxPages = val;
	}

	setPage = (val) => {
		this.currentPage = val;
	}

	nextPage = (type, profileId) => {
		if(this.currentPage < this.maxPages) {
			this.currentPage += 1;
			this.getBriefings(type, profileId)
		};
	};

	prevPage = (type, profileId) => {
		if(this.currentPage > 1) {
			this.currentPage -= 1;
			this.getBriefings(type, profileId)
		}
	};

	getBriefings = async (type, profileId) => {
		const req = type == "Profile" ? "/api/users/briefings?" : "/api/briefings?";
		const res = await $fetch(req, {
			method: "GET",
			query: {
				page: this.currentPage,
				pageLimit: 10,
				searchQuery: this.query,
				filterBy: this.filterType,
				orderBy: this.order,
				creatorId: profileId
			}
		});
		const data = JSON.parse(res);

		this.setMaxPages(Math.ceil(data[1]/10));
		this.setAllBriefing(data[0]);

		return data;
	};

	getAllBriefings = async () => {
		const req = "/api/briefings?";
		const res = await $fetch(req, {
			method: "GET",
			query: {
				page: 0,
				pageLimit: 10,
				searchQuery: "",
				filterBy: 2,
				orderBy: "Descending",
				creatorId: ""
			}
		});
		const data = JSON.parse(res);

		this.setMaxPages(Math.ceil(data[1]/10));
		this.setAllBriefing(data[0]);

		return data;
	};

	getBriefing = async (briefingId) => {
		this.setBriefing(null);

		const url = '/api/briefings/' + briefingId;
		const res = await $fetch(url, {
			method: "GET",
		});

		const data = JSON.parse(res);
		this.setBriefing(data);

		return data;
	};
}

export default new BriefingStore();