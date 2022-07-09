import {HTMLAttributes, RefObject} from 'react';

export interface FlexContainerProps extends HTMLAttributes<HTMLDivElement> {
	refObj?: RefObject<HTMLDivElement>;
	row?: boolean; // default
	column?: boolean;
	spread?: boolean;
	center?: boolean;
	centerX?: boolean;
	centerY?: boolean;
	end?: boolean;
	endX?: boolean;
	endY?: boolean;
}
