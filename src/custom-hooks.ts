import {useState} from 'react';

export const useToggle = () => {
	const [isEnabled, setIsEnabled] = useState(false);

	const toggle = (newState = !isEnabled) => {
		setIsEnabled(newState);
	};

	return [isEnabled, toggle];
};
