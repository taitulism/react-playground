import React from 'react';
import classnames from 'classnames';
import {FlexContainerProps} from './flex-props';

// TODO: vanilla css
import './Flex.less';

// TODO: function component (+forwardRef)
export default class Flex extends React.Component<FlexContainerProps> {
	static defaultProps = {
		row: true,
	};

	render () {
		const {
			row, column, className,
			center, centerX, centerY,
			end, endX, endY,
			spread, children, refObj,
			...otherProps
		} = this.props;

		const directionClassname = column ? 'flex-column' : 'flex-row';
		const classNames = classnames(
			className,
			directionClassname,
			{
				'center': center,
				'center-x': centerX,
				'center-y': centerY,
				'spread': spread,
				'end': end,
				'end-x': endX,
				'end-y': endY,
			},
			'flex',
		);

		return (
			<div ref={refObj} className={classNames} {...otherProps}>
				{children}
			</div>
		);
	}
}
