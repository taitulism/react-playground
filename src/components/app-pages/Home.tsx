import {AppCtx} from 'app/app-store-context';
import {AppPage} from 'app/app-types';
import {useContext} from 'react';

export const Home = () => {
	const app = useContext(AppCtx);

	return (
		<div className="home">
			<div>Welcome!</div>
			<button onClick={() => app.navigateTo(AppPage.PageOne)}>Page 1</button>
		</div>
	);
};
