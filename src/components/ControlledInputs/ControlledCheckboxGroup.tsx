import { ChangeEvent, FC, useState } from "react";
import { Label, ErrorMessage } from "@trussworks/react-uswds";
import useGlobalRHFContext from "../../hooks/ReactHookForm/useGlobalRHFContext";
import { FieldValues, RegisterOptions, useController } from "react-hook-form";
import Option from "../../types/Option";

interface ControlledCheckboxGroupProps {
  /**
   * unique identifier
   * used to register the input into
   * the global rhf context
   *
   * when name paired with the `useSubscription` hook,
   * the value of the current input can be tracked in real time
   */
  name: string;

  defaultValues?: Option["value"][];

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
 * <ControlledCheckboxGroup
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
const ControlledCheckboxGroup: FC<ControlledCheckboxGroupProps> = (props) => {
  const [values, setValues] = useState<Option["value"][]>(
    props.defaultValues ?? []
  );
  const {
    methods: { control },
  } = useGlobalRHFContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: control,
    rules: props.rules ?? { required: false },
  });

  return (
    <>
      <Label>{props.label}</Label>
      {props.options.map((option) => (
        <div
          key={option.label}
          data-testid="checkbox"
          className="usa-usa-checkbox"
        >
          <input
            className="usa-checkbox__input"
            id={option.label}
            type="checkbox"
            name={option.label}
            ref={field.ref}
            checked={values.includes(option.value)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const prevValues = [...values];

              if (e.target.checked) {
                prevValues.push(option.value);
              } else {
                prevValues.splice(prevValues.indexOf(option.value), 1);
              }

              // send data to react hook form
              field.onChange(prevValues);

              // update local state
              setValues(prevValues);
            }}
          />
          <label className="usa-checkbox__label" htmlFor={option.label}>
            {option.label}
          </label>
        </div>
      ))}
      {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  );
};

export default ControlledCheckboxGroup;
