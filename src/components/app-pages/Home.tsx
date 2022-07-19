import {useContext} from 'react';
import {AppCtx} from 'app/app-store-context';
import {AppPageComponent} from 'components/app-components/AppPage';
import {AppPage} from 'app/app-types';

export const Home = () => {
	const app = useContext(AppCtx);

	return (
		<AppPageComponent className="home">
			<div>Welcome!</div>
			<button onClick={() => app.navigateTo(AppPage.PageOne)}>Page 1</button>
		</AppPageComponent>
	);
};
