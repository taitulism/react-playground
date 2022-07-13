import classNames from 'classnames';
import {ColProps} from './flex-types';
import {createBaseClassnameGetter, COLUMN} from './flex-utils';

const ALIGN_LEFT = 'align-left';
const ALIGN_RIGHT = 'align-right';

const getBaseClassname = createBaseClassnameGetter(COLUMN);
const getModifierClassname = (alignLeft: boolean, alignRight: boolean) => {
	if (alignLeft) return ALIGN_LEFT;
	if (alignRight) return ALIGN_RIGHT;

	return '';
};

export const Col = ({
	elm = 'div',
	center = false,
	spread = false,
	end = false,
	alignLeft = false,
	alignRight = false,
	className,
	children,
	...otherProps
}: ColProps) => {
	const Elm = elm;
	const cls = classNames(
		className,
		getBaseClassname(center, spread, end),
		getModifierClassname(alignLeft, alignRight),
	);

	return <Elm className={cls} {...otherProps}>{children}</Elm>;
};
