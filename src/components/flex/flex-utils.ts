// TODO: export and use everywhere
const flex = {
	row: {
		base: 'flex-row',
		center: 'flex-row-center',
		spread: 'flex-row-spread',
		end: 'flex-row-end',
	},
	col: {
		base: 'flex-col',
		center: 'flex-col-center',
		spread: 'flex-col-spread',
		end: 'flex-col-end',
	},
};

export const ROW = 0;
export const COLUMN = 1;

export const createBaseClassnameGetter = (direction: 0 | 1) => {
	const flexDir = direction ? flex.col : flex.row;

	return (
		center?: boolean,
		spread?: boolean,
		end?: boolean,
	) => {
		if (center) return flexDir.center;
		if (spread) return flexDir.spread;
		if (end) return flexDir.end;

		return flexDir.base;
	};
};
