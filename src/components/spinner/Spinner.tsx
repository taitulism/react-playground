// import classnames from 'classnames';
// import './Spinner.less';

// TODO: css
const style = {
	border: '6px solid #f3f3f3',
	borderRadius: '50%',
	borderTop: '6px solid #3498db',
	width: '2cm',
	height: '2cm',
	animation: 'spin 1s linear infinite',
};

export default () => (
	<div style={style} className="Spinner" />
);
