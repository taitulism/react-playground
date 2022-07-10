export enum ReadAs {
	Text,
	DataURL,
	ArrayBuffer,
	BinaryString,
}

export function readFile (file: File, readAs: ReadAs): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = () => {
			resolve(reader.result as string);
		};

		reader.onerror = () => {
			console.log('FileReader Error', reader.error);
			reader.abort();
			reject(reader.error);
		};

		switch (readAs) {
		case ReadAs.Text:
			reader.readAsText(file);
			break;
		case ReadAs.DataURL:
			reader.readAsDataURL(file);
			break;
		case ReadAs.ArrayBuffer:
			reader.readAsArrayBuffer(file);
			break;
		case ReadAs.BinaryString:
			reader.readAsBinaryString(file);
			break;
		}
	});
}
