import { runInAction, makeObservable, observable, makeAutoObservable} from 'mobx';

class NavbarStore {
	dropdown = false;
	providers = null;
	session = null;

	constructor () {
		makeAutoObservable(this);
	}

	createSession = async () => {
		const { getSession, getProviders } = useAuth();
		this.session = await getSession();
		this.providers = await getProviders();
	};
	
	toggleDropdown = () => {
		this.dropdown = !this.dropdown;
	};
};

export default new NavbarStore();