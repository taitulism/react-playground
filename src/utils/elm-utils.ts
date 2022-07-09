export const getElmActualCssProp = (elm: HTMLElement, cssProp: string): string =>
	// TODO: fix types
	elm.style[cssProp] || window.getComputedStyle(elm)[cssProp];
