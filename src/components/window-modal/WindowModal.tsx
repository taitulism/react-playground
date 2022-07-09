import {ReactNode, useEffect} from 'react';
import {createPortal} from 'react-dom';
import Overlay from '../overlay/Overlay';

const CONTAINER_ID = 'window-modal-container';
const MASK_CLASSNAME = 'mask';

interface Props {
	containerId?: string;
	escapable?: boolean;
	noMask?: boolean;
	children: ReactNode;
	onClose?: (toggleOff: false) => void;
}

export default ({
	children,
	onClose,
	escapable = false,
	noMask = false,
}: Props) => {
	const windowModalContainer = document.getElementById(CONTAINER_ID)!;

	useEffect(() => {
		windowModalContainer.style.display = 'flex';

		return () => {
			windowModalContainer.removeAttribute('style');
		};
	}, []);

	// TODO: handle esc keypress
	const handleOverlayClick = () => {
		if (escapable && onClose) {
			onClose(false);
		}
	};

	const content = noMask
		? children
		: <Overlay className={MASK_CLASSNAME} onClick={handleOverlayClick}>{children}</Overlay>
	;

	return createPortal(content, windowModalContainer);
};
