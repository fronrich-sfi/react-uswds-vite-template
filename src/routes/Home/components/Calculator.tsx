import ControlledTextInput from "../../../components/ControlledInputs/ControlledTextInput";
import ControlledRadioGroup from "../../../components/ControlledInputs/ControlledRadioGroup";
import ControlledSelect from "../../../components/ControlledInputs/ControlledSelect";
import ControlledButtonGroup from "../../../components/ControlledInputs/ControlledButtonGroup";

const Calculator = () => {
  return (
    <div>
      <b>
        Inputs with different <i>name</i> props control different
      </b>
      <ControlledTextInput
        label="Operand A"
        name="operand-a"
        rules={{ required: true }}
        type="number"
      />
      <ControlledTextInput
        label="Operand B"
        name="operand-b"
        rules={{ required: true }}
        type="number"
      />
      <b>
        Inputs with the same <i>name</i> prop control the same variable
      </b>
      <ControlledRadioGroup
        label="Operator"
        name="operator"
        options={[
          { label: "+", value: "+" },
          { label: "-", value: "-" },
          { label: "*", value: "*" },
          { label: "/", value: "/" },
        ]}
        rules={{ required: true }}
      />
      <ControlledButtonGroup
        label="Operator"
        name="operator"
        options={[
          { label: "+", value: "+" },
          { label: "-", value: "-" },
          { label: "*", value: "*" },
          { label: "/", value: "/" },
        ]}
        rules={{ required: true }}
      />
      <ControlledSelect
        label="Operator"
        name="operator"
        options={[
          { label: "+", value: "+" },
          { label: "-", value: "-" },
          { label: "*", value: "*" },
          { label: "/", value: "/" },
        ]}
        rules={{ required: true }}
      />
    </div>
  );
};

export default Calculator;
