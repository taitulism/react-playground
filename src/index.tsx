// import './main.css';
import {createRoot} from 'react-dom/client';
import {AppCtx} from './app/app-store-context';
import {AppStore} from './app/app-store';
import {App} from './app/App';

const appContainer = document.getElementById('app');
const rootComponent = createRoot(appContainer!);
const appStore = new AppStore();

rootComponent.render(
	<AppCtx.Provider value={appStore}>
		<App />
	</AppCtx.Provider>,
);
