import { FC } from "react";
import {
  Label,
  ErrorMessage,
  Button,
  ButtonGroup,
} from "@trussworks/react-uswds";
import useGlobalRHFContext from "../../hooks/ReactHookForm/useGlobalRHFContext";
import { FieldValues, RegisterOptions, useController } from "react-hook-form";
import Option from "../../types/Option";

interface ControlledButtonGroupProps {
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

  defaultValue?: number;

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
 * <ControlledButtonGroup
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
const ControlledButtonGroup: FC<ControlledButtonGroupProps> = (props) => {
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
      <ButtonGroup type="segmented">
        {props.options.map((option) => (
          <Button
            id={option.value}
            name={field.name}
            key={option.value}
            outline={option.value !== currVal}
            onClick={() => {
              field.onChange(option.value);
            }}
          >
            {option.label}
          </Button>
        ))}
      </ButtonGroup>
      {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  );
};

export default ControlledButtonGroup;
