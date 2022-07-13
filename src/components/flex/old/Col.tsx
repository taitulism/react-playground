import React from 'react';
import {FlexContainerProps} from './flex-props';
import Flex from './Flex';

const Col: React.FunctionComponent<FlexContainerProps> = (props) => <Flex column {...props} />;

export default Col;

