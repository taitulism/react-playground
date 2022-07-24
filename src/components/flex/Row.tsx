import classNames from 'classnames';
import {DIV} from 'constants/html-constants';
import {RowProps} from './flex-types';
import {createBaseClassnameGetter, ROW} from './flex-utils';

const ALIGN_TOP = 'align-top';
const ALIGN_BOTTOM = 'align-bottom';

const getBaseClassname = createBaseClassnameGetter(ROW);
const getModifierClassname = (alignTop: boolean, alignBottom: boolean) => {
	if (alignTop) return ALIGN_TOP;
	if (alignBottom) return ALIGN_BOTTOM;

	return '';
};

export const Row = ({
	elm = DIV,
	center = false,
	spread = false,
	end = false,
	alignTop = false,
	alignBottom = false,
	className,
	children,
	...otherProps
}: RowProps) => {
	const Elm = elm;
	const cls = classNames(
		className,
		getBaseClassname(center, spread, end),
		getModifierClassname(alignTop, alignBottom),
	);

	return <Elm className={cls} {...otherProps}>{children}</Elm>;
};
