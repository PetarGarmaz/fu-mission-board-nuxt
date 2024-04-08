import { makeAutoObservable } from 'mobx';

class TooltipStore {
	tooltip = "";
	width = 0;
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

	setWidth = (val) => {
		this.width = val;
	};
}

export default new TooltipStore();