import { runInAction, makeObservable, observable, makeAutoObservable} from 'mobx';

class NavbarStore {
	dropdown = false;
	providers = null;
	session = null;

	constructor () {
		makeAutoObservable(this);
	}
	
	setSession = (sesh) => {
		this.session = sesh;
	};

	setProviders = (prov) => {
		this.providers = prov;
	};

	toggleDropdown = () => {
		this.dropdown = !this.dropdown;
	};
};

export default new NavbarStore();