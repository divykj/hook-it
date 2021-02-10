import {
  useGenericInputState,
  UseGenericInputStateReturn,
} from "./useGenericInputState";
import { SetStateAction, StateFactory } from "./utils";

type TextInputStateProps = {
  value: string;
  onChangeText: SetStateAction<string>;
};

export type UseTextInputStateReturn = UseGenericInputStateReturn<
  string,
  TextInputStateProps
>;

export type UseTextInputStateOptions = {
  reactive?: boolean;
};

export const useTextInputState = (
  initialValue: StateFactory<string>,
  { reactive = false }: UseTextInputStateOptions = {}
): UseTextInputStateReturn =>
  useGenericInputState(initialValue, {
    changeHandlerName: "onChangeText",
    reactive,
  }) as UseTextInputStateReturn;
