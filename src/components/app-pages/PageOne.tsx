import {useContext} from 'react';
import {AppCtx} from 'app/app-store-context';
import {AppPageComponent} from 'components/app-components/app-page/AppPage';
import {AppPage} from 'app/app-types';

export const PageOne = () => {
	const app = useContext(AppCtx);

	return (
		<AppPageComponent className="page-one">
			<div>Page One!</div>
			<button onClick={() => app.navigateTo(AppPage.Home)}>Home Page</button>
		</AppPageComponent>
	);
};
