import {DragEvent, FC, ReactNode} from 'react';

export interface DropzoneRenderObj {
	isDraggingOver: boolean;
	dragIssue: DropzoneError;
}

export enum DropzoneError {
	NoIssue,
	UnAcceptableKind,
	NoMultiple,
	FileExtNoMatch,
}

export enum Kind {
	All,
	File='file',
	String='string',
}

interface onDropItems {
	onDropFiles?: undefined;
	onDrop: (
		err: DropzoneError,
		data: DataTransferItemList,
		event: DragEvent<HTMLDivElement>,
	) => void;
}

interface onDropFiles {
	onDrop?: undefined;
	onDropFiles: (
		err: DropzoneError,
		data: Array<File>,
		event: DragEvent<HTMLDivElement>,
	) => void
}

type onDropProp = onDropItems | onDropFiles;
export type FileExtension = string | Array<string>;

interface BaseProps {
	className?: string;
	multiple?: boolean;
	isDisabled?: boolean;
	kind?: Kind;
	fileExt?: FileExtension;
	onDragEnter?: (dragError: DropzoneError, ev: DragEvent) => void;
	onDragLeave?: (ev: DragEvent) => void;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
	children: ReactNode | FC<DropzoneRenderObj>;
}

export type Props = BaseProps & onDropProp;

export interface ValidationResult {
	isValid: boolean;
	issue: DropzoneError;
}
