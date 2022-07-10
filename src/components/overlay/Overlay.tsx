import classnames from 'classnames';
import {CSSProperties, MouseEvent, MouseEventHandler, ReactNode, RefObject, useEffect, useRef} from 'react';
import {EMPTY_STRING} from '~constants/common-constants';
import {RELATIVE, STATIC} from '~constants/css-constants';
import {getElmActualCssProp} from '~utils/elm-utils';
import Flex from '~components/flex/Flex';
import './Overlay.css';

// TODO:? fade-in/out? maybe leave it to classname

interface Props {
	className?: string;
	style?: CSSProperties;
	onClick?: MouseEventHandler<HTMLDivElement>;
	children?: ReactNode;
}

const CLASSNAME = 'overlay';

export default ({className, style, onClick, children}: Props) => {
	const overlayClassName = classnames(CLASSNAME, className);
	const ref = useChangeParentPosition<HTMLDivElement>();
	const clickHandler = !onClick
		? undefined
		: (ev: MouseEvent<HTMLDivElement>) => {
			// Only when the click is on the overlay itself, not on any of its children
			if (ev.target === ev.currentTarget) {
				onClick(ev);
			}
		};

	return (
		<Flex center className={overlayClassName} style={style} onClick={clickHandler} refObj={ref}>
			{children}
		</Flex>
	);
};

const shouldChangePosition = (position: string) =>
	position === STATIC || position === EMPTY_STRING;

const useChangeParentPosition = <T extends HTMLElement, >(): RefObject<T> => {
	const ref = useRef<T>(null);

	useEffect(() => {
		const elm = ref.current;
		const parent = elm?.parentElement;

		if (!elm || !parent) return;

		const actualPosition = getElmActualCssProp(parent, 'position');

		if (!shouldChangePosition(actualPosition)) return;

		const cachePosition = elm.style.position;

		parent.style.position = RELATIVE;

		return () => {
			parent.style.position = cachePosition;
		};
	}, []);

	return ref;
};
