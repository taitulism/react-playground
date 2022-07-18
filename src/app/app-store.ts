import {makeAutoObservable} from 'mobx';
import {ComponentType} from 'react';
import {AppPage} from './app-types';
import routes from './routes';

export class AppStore {
	currentPageID: AppPage = AppPage.Home;

	constructor () {
		makeAutoObservable(this);
	}

	get CurrentPageComponent (): ComponentType {
		return routes.get(this.currentPageID)!;
	}

	navigateTo (pageID: AppPage) {
		this.currentPageID = pageID;
	}
}
