import { runInAction, makeObservable, observable, makeAutoObservable} from 'mobx';

class NavbarStore {
	dropdown = false;
	providers = null;
	session = null;

	constructor () {
		makeAutoObservable(this);
	}

	getSession = async () => {
		const { getSession, getProviders } = useAuth();
		const sesh = await getSession();
		const prov = await getProviders();

		this.setSession(sesh);
		this.setProviders(prov);
	};
	
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