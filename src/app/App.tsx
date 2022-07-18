import {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {AppCtx} from './app-store-context';

export const App = observer(() => {
	const app = useContext(AppCtx);

	return <>
		<h1>My App</h1>

		<div>{<app.CurrentPageComponent />}</div>
	</>;
});
