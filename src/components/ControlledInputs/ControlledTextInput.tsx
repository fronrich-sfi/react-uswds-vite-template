import { TextInput, Label, ErrorMessage } from "@trussworks/react-uswds";
import { FC, HTMLInputTypeAttribute } from "react";
import useGlobalRHFContext from "../../hooks/ReactHookForm/useGlobalRHFContext";
import { FieldValues, RegisterOptions, useController } from "react-hook-form";

interface ControlledTextInputProps {
  /**
   * unique identifier
   * used to register the input into
   * the global rhf context
   *
   * when name paired with the `useSubscription` hook,
   * the value of the current input can be tracked in real time
   */
  name: string;

  /**
   * text that labels the input
   * required for 508c
   */
  label: string;

  defaultValue?: string | number;

  /**
   * Type of data the input takes
   *
   * will infer text if not defined
   */
  type?: HTMLInputTypeAttribute;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

/**
 * A Text Input connected to the global RHF context
 *
 * # Sample Usage
 *
 * ```jsx
 * <ControlledTextInput
 *   label="Operand A"
 *   name="operand-a"
 *   rules={{ required: true }}
 *   type="number"
 * />
 * ```
 * @param props
 * @returns
 */
const ControlledTextInput: FC<ControlledTextInputProps> = (props) => {
  const {
    methods: { control },
  } = useGlobalRHFContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: control,
    defaultValue: props.defaultValue,
    rules: props.rules ?? { required: false },
  });

  return (
    <>
      <Label>{props.label}</Label>
      <TextInput
        {...field}
        key={props.name}
        type={props.type ?? "text"}
        inputRef={field.ref} // send input ref, so we can focus on input when errors appear
        validationStatus={error && "error"}
      />
      {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  );
};

export default ControlledTextInput;
