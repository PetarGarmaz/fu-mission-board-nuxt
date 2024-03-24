import { makeAutoObservable } from 'mobx';

class SortStore {
	sortDropdown = false;
	orderDropdown = false;
	showDropdown = false;

	constructor () {
		makeAutoObservable(this);
	}

	setShowDropdown = (val) => {
		this.showDropdown = val;
	}

	setSortDropdown = (val) => {
		this.sortDropdown = val;
	}

	setOrderDropdown = (val) => {
		this.orderDropdown = val;
	}

	toggleShowDropdown = () => {
		this.showDropdown = !this.showDropdown;
	}

	toggleSortDropdown = () => {
		this.sortDropdown = !this.sortDropdown;
	}

	toggleOrderDropdown = () => {
		this.orderDropdown = !this.orderDropdown;
	}
}

export default new SortStore();