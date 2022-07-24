import {CSSProperties, PropsWithChildren, ReactNode} from 'react';
import classnames from 'classnames';
import {WindowModal} from '../window-modal/WindowModal';
import {Overlay} from 'components/overlay/Overlay';
import {isString} from 'utils/typeof-utils';
import {PopupContainer} from './popup-partials';

// const POPUP_CLASSNAME = 'popup';
// const SMALL_POPUP_CLASSNAME = 'relative-top';
const MASK_CLASSNAME = 'mask';

// TODO: some props depends on other
interface Props {
	className?: string
	style?: CSSProperties
	center?: boolean
	colSpread?: boolean
	alignTop?: boolean
	escapable?: boolean
	overlay?: boolean | string
	mask?: boolean | string
	onClose?: (toggleOff: false) => void
	children: ReactNode
}

export const Popup = ({
	className,
	overlay = true,
	mask = true,
	center = true,
	colSpread = false,
	alignTop,
	escapable, // TODO: if onClose exist - no need escapable
	style,
	onClose,
	children,
}: Props) => {
	const maskClassname = mask && isString(mask) ? mask : mask ? MASK_CLASSNAME : '';
	const overlayClassname = classnames(overlay, maskClassname, center && 'flex-col align-center');
	const popupClassname = classnames(className, colSpread && 'flex-col-spread');

	// TODO: handle esc keypress
	const handleOverlayClick = () => {
		if (escapable && onClose) {
			onClose(false);
		}
	};

	const popup = (
		<PopupContainer className={popupClassname} style={style}>
			{children}
		</PopupContainer>
	);

	return (
		<WindowModal>
			<Overlay
				className={overlayClassname}
				onClick={handleOverlayClick}
			>{popup}
			</Overlay>
		</WindowModal>
	);
};
