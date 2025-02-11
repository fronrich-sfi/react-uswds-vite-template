import { FC } from "react";
import { Label, ErrorMessage, Radio } from "@trussworks/react-uswds";
import useGlobalRHFContext from "../../hooks/ReactHookForm/useGlobalRHFContext";
import { FieldValues, RegisterOptions, useController } from "react-hook-form";
import Option from "../../types/Option";

interface ControlledRadioGroupProps {
  /**
   * unique identifier
   * used to register the input into
   * the global rhf context
   *
   * when name paired with the `useSubscription` hook,
   * the value of the current input can be tracked in real time
   */
  name: string;

  defaultValue?: string | number;

  /**
   * text that labels the input
   * required for 508c
   */
  label: string;

  options: Option[];

  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

/**
 * A Radio Group connected to the global RHF context
 *
 * # Sample Usage
 *
 * ```jsx
 * <ControlledRadioGroup
 *   label="Operator"
 *   name="operator"
 *   options={[
 *     { label: "+", value: "+" },
 *     { label: "-", value: "-" },
 *     { label: "*", value: "*" },
 *     { label: "/", value: "/" },
 *   ]}
 *   rules={{ required: true }}
 * />
 *```
 * @param props
 * @returns
 */
const ControlledRadioGroup: FC<ControlledRadioGroupProps> = (props) => {
  const {
    methods: { control, watch },
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

  const currVal = watch(props.name);

  return (
    <>
      <Label>{props.label}</Label>
      {props.options.map((option) => (
        <Radio
          inputRef={field.ref}
          id={option.value}
          name={field.name}
          key={option.value}
          label={option.label}
          checked={option.value === currVal}
          onChange={() => {
            field.onChange(option.value);
          }}
        />
      ))}
      {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  );
};

export default ControlledRadioGroup;
