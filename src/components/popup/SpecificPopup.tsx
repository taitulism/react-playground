import {Popup} from 'components/app-components/popup/Popup';
import {PopupBody, PopupFooter, PopupHeader} from 'components/app-components/popup/popup-partials';

interface Props {
	closePopup: VoidFunction;
}

export const SpecificPopup = ({closePopup}: Props) => {
	const style = {
		height: '300px',
		backgroundColor: '#271e2c',
		color: 'azure',
	};

	return (
		<Popup
			className="specific-popup"
			onClose={closePopup}
			style={style}
			escapable
			colSpread
		>
			<PopupHeader><h1>Title</h1></PopupHeader>
			<PopupBody>
				<p>lkdsjfhsd fljshdfiweufn wejf hninw eweun ain u fiaf ns disdn fsrfk sfusnfh se iasmn asi</p>
				<p>disdn fsrfk sfusnfh se iasmn ass kdsjfhsd fljshdfiweufn wejf hninw eweun ain u fiaf ns</p>
			</PopupBody>
			<PopupFooter>Bottom</PopupFooter>
		</Popup>
	);
};
