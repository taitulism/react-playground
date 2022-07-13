import {observer} from 'mobx-react-lite';
import {useContext} from 'react';
import {Row} from '../components/flex/Row';
import {AppCtx} from './app-store-context';

export const App = observer(() => {
	const app = useContext(AppCtx);
	const containerStyle = {height: '600px', width: '600px', backgroundColor: '#f0f8ff'};

	return <>
		<h1>My App</h1>

		{app.isLoading ? 'loading' : 'idle'}

		<Row alignTop className="container" style={containerStyle}>
			<div className="square"></div>
			<div className="square"></div>
			<div className="square"></div>
		</Row>
	</>;
});
