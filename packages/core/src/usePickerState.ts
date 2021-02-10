import {
  useGenericInputState,
  UseGenericInputStateReturn,
} from "./useGenericInputState";
import { SetStateAction, StateFactory } from "./utils";

type PickerStateProps = {
  value: string;
  onValueChange: SetStateAction<string>;
};

export type UsePickerStateReturn = UseGenericInputStateReturn<
  string,
  PickerStateProps
>;

export type UsePickerStateOptions = {
  reactive?: boolean;
};

export const usePickerState = (
  initialValue: StateFactory<string>,
  { reactive = false }: UsePickerStateOptions = {}
): UsePickerStateReturn =>
  useGenericInputState(initialValue, {
    changeHandlerName: "onValueChange",
    reactive,
  }) as UsePickerStateReturn;
