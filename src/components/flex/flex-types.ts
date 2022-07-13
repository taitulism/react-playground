import {HTMLAttributes, ReactHTML, ReactNode} from 'react';

// this XOR can only handle two types
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

interface FlexBaseProps extends HTMLAttributes<HTMLElement> {
	elm?: keyof ReactHTML,
	className?: string,
	children?: ReactNode,
}

type FlexItemsLayout =
	| {center?: boolean, spread?: never, end?: never}
	| {center?: never, spread?: boolean, end?: never}
	| {center?: never, spread?: never, end?: boolean}
;

type RowSecondaryModifier = XOR<
	{alignTop?: boolean},
	{alignBottom?: boolean}
>;

type ColSecondaryModifier = XOR<
	{alignLeft?: boolean},
	{alignRight?: boolean}
>;

export type RowProps = FlexBaseProps & FlexItemsLayout & RowSecondaryModifier;
export type ColProps = FlexBaseProps & FlexItemsLayout & ColSecondaryModifier;
