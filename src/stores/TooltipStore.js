import { makeAutoObservable } from 'mobx';

class TooltipStore {
	tooltip = "";
	tooltipType = "";

	constructor () {
		makeAutoObservable(this);
	}

	setTooltip = (val) => {
		this.tooltip = val;
	};

	setTooltipType = (val) => {
		if(this.tooltipType == val) {
			this.tooltipType = "";
		} else {
			this.tooltipType = val;
		};
	};
}

export default new TooltipStore();