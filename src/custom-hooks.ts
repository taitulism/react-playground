import {useState} from 'react';

export const useToggle = (initialValue: boolean = false) => {
	const [isEnabled, setIsEnabled] = useState<boolean>(initialValue);

	const toggle = (newState = !isEnabled) => {
		setIsEnabled(newState);
	};

	// TODO: "as const" https://fettblog.eu/typescript-react-typeing-custom-hooks/
	return [isEnabled, toggle] as const;
};
