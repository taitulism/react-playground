import {Home} from 'components/app-pages/Home';
import {PageOne} from 'components/app-pages/PageOne';
import {AppPage} from './app-types';

export default new Map<AppPage, React.ComponentType>([
	[AppPage.Home, Home],
	[AppPage.PageOne, PageOne],
]);
