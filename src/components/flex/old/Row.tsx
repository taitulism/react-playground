import React from 'react';
import {FlexContainerProps} from './flex-props';
import Flex from './Flex';

const Row: React.FunctionComponent<FlexContainerProps> = (props) =>
	// TODO: Row default is centerY
	<Flex row {...props} />
;

export default Row;
