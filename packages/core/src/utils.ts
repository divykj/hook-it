export type StateFactory<T> = T | (() => T);
export type SetStateAction<T> = (payload: StateFactory<T> | T) => void;
