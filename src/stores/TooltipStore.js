import { makeAutoObservable } from 'mobx';

class TooltipStore {
	tooltip = "";
	pos = [0, 0];

	constructor () {
		makeAutoObservable(this);
	}

	setTooltip = (val) => {
		this.tooltip = val;
	};

	setPos = (val) => {
		this.pos = val;
	};
}

export default new TooltipStore();