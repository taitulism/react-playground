import {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {AppCtx} from './app-store-context';
import {useWindowModal} from 'components/app-components/window-modal/use-window-modal';

export const App = observer(() => {
	const app = useContext(AppCtx);

	useWindowModal();

	return <>
		<header>
			<h1>My App</h1>
		</header>
		{<app.CurrentPageComponent />}
		<footer className="flex-row-center">Youv'e reached the bottom</footer>
	</>;
});
