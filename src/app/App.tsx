import {observer} from 'mobx-react-lite';
import {useContext} from 'react';
import {AppCtx} from './app-store-context';

export const App = observer(() => {
	const app = useContext(AppCtx);

	return <>
		<h1>My App</h1>

		{app.isLoading ? 'Loading...' : 'Loaded'}
	</>;
});
