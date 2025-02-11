import { Label, ErrorMessage } from "@trussworks/react-uswds";
import { FC } from "react";
import useGlobalRHFContext from "../../hooks/ReactHookForm/useGlobalRHFContext";
import { FieldValues, RegisterOptions, useController } from "react-hook-form";

interface ControlledRangeSliderProps {
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

  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const ControlledRangeSlider: FC<ControlledRangeSliderProps> = (props) => {
  const {
    methods: { control },
  } = useGlobalRHFContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: control,
    defaultValue: props.rules?.min ?? 0,
    rules: props.rules ?? { required: false },
  });

  return (
    <>
      <Label>{props.label}</Label>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <b>{props.rules?.min && (props.rules?.min as number)}</b>
        <input
          {...field}
          type="range"
          className="usa-range"
          key={props.name}
          ref={field.ref} // send input ref, so we can focus on input when errors appear
          min={(props.rules?.min as number) ?? 0}
          max={(props.rules?.max as number) ?? 100}
        />
        <b>{props.rules?.max && (props.rules?.max as number)}</b>
      </div>
      {error?.message && <ErrorMessage>{error?.message}</ErrorMessage>}
    </>
  );
};

export default ControlledRangeSlider;
