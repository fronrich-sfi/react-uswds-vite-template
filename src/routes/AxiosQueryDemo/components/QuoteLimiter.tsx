import ControlledCheckboxGroup from "../../../components/ControlledInputs/ControlledCheckboxGroup";
import ControlledRangeSlider from "../../../components/ControlledInputs/ControlledRangeSlider";

const QuoteLimiter = () => {
  return (
    <>
      <ControlledRangeSlider
        label="Number of Quotes"
        name="num-quotes"
        rules={{ min: 1, max: 5 }}
      />
      <ControlledCheckboxGroup
        label="Tags"
        name="tags"
        options={[
          { label: "famous", value: "famous" },
          { label: "romance", value: "romance" },
          { label: "poem", value: "poem" },
          { label: "inspirational", value: "inspirational" },
        ]}
      />
    </>
  );
};

export default QuoteLimiter;
