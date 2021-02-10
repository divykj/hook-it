import { useState, useCallback } from "react";
import { SetStateAction, StateFactory } from "./utils";

export type UseToggleStateReturn = {
  value: boolean;
  state: boolean;
  visible: boolean;
  on: () => void;
  set: () => void;
  start: () => void;
  show: () => void;
  off: () => void;
  reset: () => void;
  stop: () => void;
  hide: () => void;
  toggle: () => void;
  flip: () => void;
  setValue: SetStateAction<boolean>;
};

export const useToggleState = (
  initialValue: StateFactory<boolean> = false
): UseToggleStateReturn => {
  const [value, setValue] = useState(initialValue);

  const on = useCallback(() => setValue(true), []);
  const off = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((oldValue) => !oldValue), []);

  return {
    value,
    state: value,
    visible: value,
    on,
    set: on,
    start: on,
    show: on,
    off,
    reset: off,
    stop: off,
    hide: off,
    toggle,
    flip: toggle,
    setValue,
  };
};
