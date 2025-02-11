import ControlledRangeSlider from "../../../components/ControlledInputs/ControlledRangeSlider";

const QuoteLimiter = () => {
  return (
    <>
      <ControlledRangeSlider
        label="Number of Quotes"
        name="num-quotes"
        rules={{ min: 1, max: 5 }}
      />
    </>
  );
};

export default QuoteLimiter;
