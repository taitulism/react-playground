import {AppCtx} from 'app/app-store-context';
import {AppPage} from 'app/app-types';
import {useContext} from 'react';

export const PageOne = () => {
	const app = useContext(AppCtx);

	return (
		<div className="page-one">
			<div>Page One!</div>
			<button onClick={() => app.navigateTo(AppPage.Home)}>Home Page</button>
		</div>
	);
};
