import classnames from 'classnames';
import {
	HTMLAttributes,
	MouseEvent,
	MouseEventHandler,
	ReactNode,
	RefObject,
	useEffect,
	useRef,
} from 'react';
import {EMPTY_STRING} from 'constants/common-constants';
import {RELATIVE, STATIC} from 'constants/css-constants';
import {getElmActualCssProp} from 'utils/elm-utils';
import './Overlay.css';

// TODO:? fade-in/out? maybe leave it to classname

// TODO: consts app-classnames.ts
const OVERLAY_CLASSNAME = 'overlay';
const MASK_CLASSNAME = 'mask';

interface Props extends HTMLAttributes<HTMLDivElement> {
	onClick?: MouseEventHandler<HTMLDivElement>;
	children?: ReactNode;
}

// TODO:? verify single Overlay in parent?
export const Overlay = (props: Props) => {
	const {className, onClick, children, ...moreProps} = props;
	const overlayClassName = classnames(OVERLAY_CLASSNAME, className);
	const ref = useChangeParentPosition<HTMLDivElement>();
	const clickHandler = !onClick
		? undefined
		: (ev: MouseEvent<HTMLDivElement>) => {
			// click on the overlay itself, not on its children
			if (ev.target === ev.currentTarget) {
				onClick(ev);
			}
		};

	return (
		<div
			className={overlayClassName}
			onClick={clickHandler}
			ref={ref}
			{...moreProps}
		>
			{children}
		</div>
	);
};

// TODO: Mask is an app/oppinionated. Move it away.
export const Mask = ({children, ...moreProps}: Props) => (
	<Overlay className={MASK_CLASSNAME} {...moreProps}>{children}</Overlay>
);

const shouldChangePosition = (position: string) =>
	position === STATIC || position === EMPTY_STRING;

const useChangeParentPosition = <T extends HTMLElement, >(): RefObject<T> => {
	const ref = useRef<T>(null);

	useEffect(() => {
		const elm = ref.current;
		const parent = elm?.parentElement;

		if (!elm || !parent) return;

		const actualPosition = getElmActualCssProp(parent, 'position'); // TODO: const

		if (!shouldChangePosition(actualPosition)) return;

		const cachePosition = elm.style.position;

		parent.style.position = RELATIVE;

		return () => {
			parent.style.position = cachePosition;
		};
	}, []);

	return ref;
};
