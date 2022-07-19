import classNames from 'classnames';
import type {HTMLAttributes} from 'react';

// TODO: NOT IN USE. Delete or move to common
// String Or String-Araay StrOrStrAry
// type StrOrStrAry = string | Array<string>

// TODO: 1. is this what I meant? 2. move to common
type CommonComponentProps = HTMLAttributes<HTMLElement>

export const AppPageComponent = ({className, children, ...moreProps}: CommonComponentProps) => {
	const clsnm = classNames(className, 'flex-grow');

	return (
		<main className={clsnm} {...moreProps}>
			{children}
		</main>
	);
};
