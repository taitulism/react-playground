import {DragEvent, useState} from 'react';
import classnames from 'classnames';
import {DropzoneError, Kind, Props} from './dropzone-types';
import {
	areFileExtensionsAllowed,
	getFiles,
	isReallyEnter,
	isReallyLeave,
	validateDrag,
} from './dropzone-utils';

/*
	Todos:

	* index file to export everything
	* A better API is needed instead of the "kind" prop. `<Dropzone kind={Kind.File} />` is ugly.
		Maybe just a flag: `<Dropzone files />`. It could also replace the `multiple` (file/s, image/s etc.)
		(Keep the `multiple` anyways because it's conventional)


	Notes:

	* Enter & Leave events need normalization because they get triggered while
		draging over different elements inside the drop zone.
	* preventDefault is needed for enabling DnD (default is to block).
	* stopPropagation (needs more research) is for DnD events on the window (dragging a file opens
		it	in a new tab).
	* use `onDropFiles` for files and `onDrop` for anything else.
	* When there's an issue, onDrop is called without the files (only for files. Items are always there).
	* Some dragging issues can be caught at onEnter and some only onDrop.
		While dragging u don't have the file name nor content but meta `kind` and `type`.
	* DnD Limitation:
		When onEnter blocks the drop, can't handle the issue on drop.

		When the drag event is blocked in onEnter or onOver we get the not-allowed-cursor
		but the drop event never happens. UX is ok but the developer now needs handle the issue himself.
		e.g. `useState(issue)` in the onEnter handler.

		The other option (the current way) is to always allow the drop (even with issues) and
		handle the issues in the onDrop but then we loose the not-allowed-cursor (css
		doesn't work) - UX takes the hit
*/

export const DropZone = ({
	// type,         // TODO:? allow only given `dataTransfer.types` or `dataTransfer.items[0].type`
	kind = Kind.File,
	className,
	multiple = false,
	isDisabled = false,
	fileExt,
	onDragEnter,
	onDragLeave,
	onDrop,
	onDropFiles,
	onClick,
	children,
}: Props) => {
	const [isDraggingOver, setIsDraggingOver] = useState(false);
	const [dragIssue, setDraggingIssue] = useState<DropzoneError>(DropzoneError.NoIssue);
	const clearDragging = () => {
		setIsDraggingOver(false);
		setDraggingIssue(DropzoneError.NoIssue);
	};
	const isFuncChildren = typeof children === 'function';

	const containerClassName = classnames(
		className,
		'dropzone',
		isDisabled && 'dropzone-disabled',
		isDraggingOver && !isDisabled && 'dropzone-active',
		dragIssue && !isDisabled && 'dropzone-issue',
	);

	const enterHandler = (ev: DragEvent) => {
		if (isDisabled || !isReallyEnter(ev)) return;

		setIsDraggingOver(true);

		const {dataTransfer} = ev;
		const {isValid, issue} = validateDrag(dataTransfer, {multiple, kind});

		if (!isValid) {
			setDraggingIssue(issue);
		}

		onDragEnter?.(issue, ev);
	};

	const dragOverHandler = (ev: DragEvent) => {
		// TODO:? prevent only if no issue (see issue below)
		if (!isDisabled) {
			ev.preventDefault();
			ev.stopPropagation();
		}
	};

	const leaveHandler = (ev: DragEvent) => {
		if (!isReallyLeave(ev)) return;

		clearDragging();
		onDragLeave?.(ev);
	};

	const dropHandler = (ev: DragEvent<HTMLDivElement>) => {
		ev.preventDefault();
		// ev.stopPropagation();

		if (!ev.dataTransfer) return;

		if (kind === Kind.File && onDropFiles) {
			let files = getFiles(ev.dataTransfer);

			const dropIssue = areFileExtensionsAllowed(files, fileExt)
				? dragIssue
				: DropzoneError.FileExtNoMatch
			;

			files = dropIssue ? [] : files;

			onDropFiles(dropIssue, files, ev);
		}
		else {
			onDrop?.(dragIssue, ev.dataTransfer.items, ev);
		}

		clearDragging();
	};

	return (
		<div
			className={containerClassName}
			onClick={isDisabled ? undefined : onClick }
			onDragOver={dragOverHandler}
			onDragEnter={enterHandler}
			onDragLeave={leaveHandler}
			onDrop={dropHandler}
		>
			{isFuncChildren ? children({isDraggingOver, dragIssue}) : children}
		</div>
	);
};
