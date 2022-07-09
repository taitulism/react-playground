import {useEffect} from 'react';

// TODO: this is very opinionated. an App thing. move elsewhere.
const DEFAULT_ID = 'window-modal-container';

export const useWindowModal = (id: string = DEFAULT_ID) => useEffect(() => {
	const modalContainer = getOrCreateModalContainer(id);

	document.body.appendChild(modalContainer);

	return () => {
		modalContainer.remove();
	};
}, []);


function getOrCreateModalContainer (id: string): HTMLElement {
	return document.getElementById(id) || createModalContainer(id);
}

function createModalContainer (id: string): HTMLElement {
	const modalContainer = document.createElement('section');

	modalContainer.id = id;

	return modalContainer;
}
