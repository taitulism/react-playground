import {CSSProperties, PropsWithChildren, ReactNode} from 'react';
import classnames from 'classnames';

const POPUP_CLASSNAME = 'popup';

interface Props {
	className?: string
	style?: CSSProperties
	children: ReactNode
}

export const PopupContainer = ({
	className,
	style,
	children,
}: Props) => {
	const popupClassName = classnames(
		className,
		POPUP_CLASSNAME,
	);

	return (
		<div className={popupClassName} style={style}>
			{children}
		</div>
	);
};

export const PopupHeader = ({children}: PropsWithChildren) => (
	<header className="popup-header">
		{children}
	</header>
);

export const PopupBody = ({children}: PropsWithChildren) => (
	<main className="popup-body flex-grow">
		{children}
	</main>
);

export const PopupFooter = ({children}: PropsWithChildren) => (
	<footer className="popup-footer">
		{children}
	</footer>
);
