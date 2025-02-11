import { Label, ErrorMessage, Select } from "@trussworks/react-uswds";
import { FC } from "react";
import useGlobalRHFContext from "../../hooks/ReactHookForm/useGlobalRHFContext";
import { FieldValues, RegisterOptions, useController } from "react-hook-form";
import Option from "../../types/Option";

interface ControlledSelectProps {
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

  options: Option[];

  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

/**
 * A Select connected to the global RHF context
 *
 * # Sample Usage
 *
 * ```jsx
 * <ControlledSelect
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
 * ```
 * @param props
 * @returns
 */
const ControlledSelect: FC<ControlledSelectProps> = (props) => {
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
      <Select
        id={field.name}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        disabled={field.disabled}
        key={props.name}
        inputRef={field.ref} // send input ref, so we can focus on input when errors appear
        validationStatus={error && "error"}
      >
        <option key="non-option" value={[""]}>
          - Select -{" "}
        </option>
        {props.options.map((option) => (
          <option key={option.value as string} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  );
};

export default ControlledSelect;
