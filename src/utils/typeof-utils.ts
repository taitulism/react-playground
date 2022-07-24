const STRING = 'string';
const BOOLEAN = 'boolean';

const isTypeof = (something: unknown, isTypeof: string): boolean => typeof something === isTypeof;

export const isBoolean = (something: unknown) => isTypeof(something, BOOLEAN);
export const isString = (something: unknown) => isTypeof(something, STRING);
export const isArray = (something: unknown) => Array.isArray(something);
