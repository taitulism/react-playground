import {useEffect} from 'react';

const blockDrop = (ev: globalThis.DragEvent) => {
	ev.preventDefault();

	if (ev.dataTransfer) {
		ev.dataTransfer.dropEffect = 'none';
	}
};

export const useDontDropOnWindow = () => (
	useEffect(() => {
		globalThis.addEventListener('dragover', blockDrop);
		// globalThis.addEventListener('drop', preventDefault);

		return () => {
			globalThis.removeEventListener('dragover', blockDrop);
			// globalThis.removeEventListener('drop', preventDefault);
		};
	}, [])
);


// toggle a classname on the document.body for changing styles outside the dropzone
// (REMOVED: user can use onDragEnter/Leave to do whatever s/he wants)
// const bodyClassname = typeof bodyClassName === 'string' ? bodyClassName : 'active-dropzone';
// useEffect(() => {
// 	if (bodyClassName) {
// 		isDraggingOver
// 			? document.body.classList.add(bodyClassname)
// 			: document.body.classList.remove(bodyClassname);
// 	}
// }, [isDraggingOver]);

