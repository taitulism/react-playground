import {DragEvent} from 'react';
import {DropzoneError, FileExtension, Kind, ValidationResult} from './dropzone-types';

// const preventDefault = (ev: MouseEvent | ReactMouseEvent | DragEvent) => ev.preventDefault();

export const getFiles = (dataTransfer: DataTransfer): Array<File> => Array.from(dataTransfer.files);
export const getFileList = (dataTransfer: DataTransfer): FileList => dataTransfer.files || null;

export const isReallyEnter = (ev: DragEvent) => normalizedDragEnterLeave(ev);
export const isReallyLeave = (ev: DragEvent) => normalizedDragEnterLeave(ev);

// TODO: check if this works instead: `ev.target === ev.currentTarget`
const normalizedDragEnterLeave = (ev: DragEvent): boolean => {
	const cameFromElm = ev.relatedTarget;

	return cameFromElm === null || !ev.currentTarget.contains(cameFromElm as Node);
};

const getItemsByKind = (kind: Kind, items: DataTransferItemList) => (
	Array.from(items).filter((item) => item.kind === Kind[kind].toLowerCase())
);

// const getItemsByType = (type: string, items: DataTransferItemList) => (
// 	Array.from(items).filter((item) => item.type === type)
// );

const FILES = 'Files';
const PLAIN_TEXT = 'text/plain';

const isKindAllowed = (kind: Kind, dataTransfer: DataTransfer) => {
	if (kind === Kind.All) return true;
	else if (kind === Kind.File) return dataTransfer.types.includes(FILES);
	else return dataTransfer.types.includes(PLAIN_TEXT);
};

const isMultiOverSingle = (
	multiple: boolean,
	kind: Kind,
	dataTransfer: DataTransfer,
) => (
	multiple
		? false
		: getItemsByKind(kind, dataTransfer.items).length > 1
);

// TODO:? move back to DZ.tsx?
export function validateDrag (
	dragData: DataTransfer,
	{multiple, kind}: {multiple: boolean, kind: Kind},
): ValidationResult {
	let issue = DropzoneError.NoIssue;

	if (!isKindAllowed(kind, dragData)) {
		issue = DropzoneError.UnAcceptableKind;
	}
	else if (isMultiOverSingle(multiple, kind, dragData)) {
		issue = DropzoneError.NoMultiple;
	}

	return {
		isValid: issue === DropzoneError.NoIssue,
		issue,
	};
}

export const areFileExtensionsAllowed = (files: Array<File>, allowedExtensions?: FileExtension) => {
	if (files.length && allowedExtensions) {
		const every = files.every((file) => {
			if (typeof allowedExtensions === 'string') {
				return file.name.endsWith(allowedExtensions);
			}
			else {
				return allowedExtensions.some((ext) => file.name.endsWith(ext));
			}
		});

		return every;
	}

	return true;
};
