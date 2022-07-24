import {useContext} from 'react';
import {AppCtx} from 'app/app-store-context';
import {AppPageComponent} from 'components/app-components/AppPage';
import {AppPage} from 'app/app-types';
import {useToggle} from '../../custom-hooks'; // TODO: abs path
import {SpecificPopup} from 'components/popup/SpecificPopup';

export const Home = () => {
	const app = useContext(AppCtx);
	const [showPopup, togglePopup] = useToggle();

	return (
		<AppPageComponent className="home">
			<div>Welcome!</div>
			<button onClick={() => app.navigateTo(AppPage.PageOne)}>Page 1</button>
			<button onClick={() => togglePopup()}>Open Popup</button>
			{showPopup && <SpecificPopup closePopup={togglePopup} />}
		</AppPageComponent>
	);
};
