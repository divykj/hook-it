import { useState, useEffect } from "react";
import { SetStateAction, StateFactory } from "./utils";

export type UseReactiveStateReturn<T> = [T, SetStateAction<T>];

export const useReactiveState = <T>(
  externalValue: StateFactory<T>
): UseReactiveStateReturn<T> => {
  const [state, setState] = useState(externalValue);

  useEffect(() => {
    setState(externalValue);
  }, [externalValue]);

  return [state, setState];
};
