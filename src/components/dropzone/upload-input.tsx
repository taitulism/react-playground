import React, {ForwardedRef, forwardRef} from 'react';

interface Props {
	// inputRef: React.RefObject<HTMLInputElement>;
	fileExtensions?: string | Array<string>;
	allowMultiple?: boolean;
	onUpload: (files?: FileList) => void;
}

/**
 * @deprecated No need of this as component. Use `chooseFile` function instead:
 * Example:
 * 	```
 * 	<button onClick={chooseFile().then(file)} />
 * 	```
 */
export const UploadInput = forwardRef((props: Props, ref?: ForwardedRef<HTMLInputElement>) => {
	const {
		fileExtensions,
		allowMultiple,
		onUpload,
	} = props;

	const accpet = Array.isArray(fileExtensions)
		? fileExtensions.join(', ')
		: fileExtensions
	;

	return (
		<input
			ref={ref}
			type="file"
			style={{display: 'none'}} // TODO: className
			accept={accpet || '*'}
			multiple={allowMultiple}
			onChange={() => {
				const files = ref?.current?.files || undefined; // TODO: type

				onUpload(files);
			}}
		/>
	);
});
