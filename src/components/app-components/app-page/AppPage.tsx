import classNames from 'classnames';
import type {HTMLAttributes} from 'react';
import './AppPage.css';

// TODO: NOT IN USE. Delete or move to common
// String Or String-Araay StrOrStrAry
// type StrOrStrAry = string | Array<string>

// TODO: 1. is this what I meant? 2. move to common
type CommonComponentProps = HTMLAttributes<HTMLElement>

export const AppPageComponent = ({className, children, ...moreProps}: CommonComponentProps) => {
	const clsnm = classNames('app-page', className);

	return (
		<main className={clsnm} {...moreProps}>
			{children}
		</main>
	);
};
