import { useState, useCallback } from "react";
import { useReactiveState } from "./useReactiveState";
import { SetStateAction, StateFactory } from "./utils";

export type GenericInputStateProps<T> = {
  value?: T;
};

export type UseGenericInputStateReturn<T, U> = {
  value: T;
  setValue: SetStateAction<T>;
  props: U;
  reset: () => void;
};

export type UseGenericInputStateOptions = {
  changeHandlerName?: string;
  reactive?: boolean;
};

export const useGenericInputState = <T>(
  initialValue: StateFactory<T>,
  {
    changeHandlerName = "onChange",
    reactive = false,
  }: UseGenericInputStateOptions = {}
): UseGenericInputStateReturn<T, GenericInputStateProps<T>> => {
  const [value, setValue] = reactive
    ? useReactiveState<T>(initialValue)
    : useState<T>(initialValue);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, []);

  return {
    value,
    setValue,
    props: {
      value,
      [changeHandlerName]: setValue,
    },
    reset,
  };
};
