import { makeAutoObservable } from 'mobx';

class SortStore {
	filterDropdown = false;
	orderDropdown = false;
	showDropdown = false;

	constructor () {
		makeAutoObservable(this);
	}

	setShowDropdown = (val) => {
		this.showDropdown = val;
	}

	setFilterDropdown = (val) => {
		this.filterDropdown = val;
	}

	setOrderDropdown = (val) => {
		this.orderDropdown = val;
	}

	toggleShowDropdown = () => {
		this.showDropdown = !this.showDropdown;
	}

	toggleFilterDropdown = () => {
		this.filterDropdown = !this.filterDropdown;
	}

	toggleOrderDropdown = () => {
		this.orderDropdown = !this.orderDropdown;
	}
}

export default new SortStore();