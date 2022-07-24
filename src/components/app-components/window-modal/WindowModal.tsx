import {CSSProperties, PropsWithChildren, ReactNode, useEffect} from 'react';
import classnames from 'classnames';
import {createPortal} from 'react-dom';
import {Overlay} from 'components/overlay/Overlay';
import {BLOCK, STYLE} from 'constants/css-constants';
import {isString} from 'utils/typeof-utils';

// TODO: un-oppinionate
const CONTAINER_ID = 'window-modal-container';

// interface WindowModalProps {
// // children: ReactNode;
// // TODO:?style?: CSSProperties;
// // TODO:?className?: string;
// // TODO:? containerId?: string;
// // TODO:? containerClassname?: string;
// }

export const WindowModal = ({
	children,
}: PropsWithChildren) => {
	const windowModalContainer = document.getElementById(CONTAINER_ID)!;

	useEffect(() => {
		windowModalContainer.style.display = BLOCK;

		return () => {
			windowModalContainer.removeAttribute(STYLE);
		};
	}, []);

	return createPortal(children, windowModalContainer);
};
