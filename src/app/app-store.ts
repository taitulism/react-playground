import {makeAutoObservable} from 'mobx';

export class AppStore {
	isLoading = true;

	constructor () {
		makeAutoObservable(this);
		setTimeout(() => this.setIsLoading(false), 2000);
	}

	setIsLoading (isLoading: boolean) {
		this.isLoading = isLoading;
	}
}
