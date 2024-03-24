import { makeAutoObservable } from 'mobx';

class BriefingStore {
	allBriefings = [];
	query = "";
	sort = "Date";
	order = "Desc";
	currentPage = 1;
	maxPages = 1;
	filter = [false,true,true,true]; //['Future Missions', 'Current Mission', 'Completed Missions', 'Failed Missions']

	constructor () {
		makeAutoObservable(this);
	}

	setAllBriefing = (val) => {
		this.allBriefings = val;
	};

	setQuery = (val) => {
		this.query = val;
	};

	setFilter = (val) => {
		this.filter = val;
		this.getBriefings();
	};

	setSort = (val) => {
		this.sort = val;
	};

	setOrder = (val) => {
		this.order = val;
	};

	setMaxPages = (val) => {
		this.maxPages = val;
	}

	nextPage = () => {
		if(this.currentPage < this.maxPages) {
			this.currentPage += 1;
			this.getBriefings()
		}
	};

	prevPage = () => {
		if(this.currentPage > 1) {
			this.currentPage -= 1;
			this.getBriefings()
		}
	};

	getBriefings = async () => {
		console.log(this.allBriefings.length);
		const res = await $fetch('/api/briefings?', {
			method: "GET",
			query: {
				page: this.currentPage,
				pageLimit: 10,
				searchQuery: "",
				sortBy: "Date",
				orderBy: "Desc",
				showFuture: this.filter[0],
				showCurrent: this.filter[1],
				showCompleted: this.filter[2],
				showFailed: this.filter[3],
			}
		});
		const data = res[0];

		this.setMaxPages(Math.ceil(res[1]/10));
		this.setAllBriefing(data);
	};
}

export default new BriefingStore();