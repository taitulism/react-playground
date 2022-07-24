import {INPUT} from 'constants/html-constants';

export type Accept = string | Array<string>;

/* TODO: checkout `window.showOpenFilePicker`
https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker

MDN says it's for HTTPS only but it opens on localhost
*/

const accept = (fileTypes: Accept) => (
	typeof fileTypes === 'string'
		? fileTypes
		: fileTypes.join(', ')
);

export function chooseFile (fileTypes?: Accept): Promise<File> {
	return _chooseFile(fileTypes, false) as Promise<File>;
}

export function chooseFiles (fileTypes?: Accept): Promise<FileList> {
	return _chooseFile(fileTypes, true) as Promise<FileList>;
}

function _chooseFile (
	fileTypes: Accept = '*',
	multiple: boolean = false,
): Promise<File | FileList> {
	return new Promise((resolve) => {
		const input = document.createElement(INPUT);

		// TODO: constants
		input.setAttribute('type', 'file');
		input.setAttribute('accept', accept(fileTypes));
		input.setAttribute('multiple', String(multiple));

		input.addEventListener('change', () => {
			// TODO: can `input.files` be null?
			multiple ? resolve(input.files as FileList) : resolve(input.files![0] as File);
		}, {once: true});

		input.click();
	});
}



/*

Issue:
	When the input is persistant (e.g. created once, outside of this function),
	canceling an upload doesn't resolve the promise (i.e. `changeHandler` is not called).

Reproduction:
	Cancel twice and then upload a file.
	`changeHandler` is calles 3 times with the file

Optional Fix:
	first set an `onFocus` event on the body. Check `input.value.length`
	https://trishulgoel.com/handle-cancel-click-on-file-input/

*/
