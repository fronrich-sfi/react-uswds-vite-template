import useRHFSubscription from "../../../hooks/ReactHookForm/useRFHSubscription";
import { CardGroup } from "@trussworks/react-uswds";
import ResultCell from "./ResultCell";

const Results = () => {
  const operandA = useRHFSubscription("operand-a");
  const operandB = useRHFSubscription("operand-b");
  const operator = useRHFSubscription("operator");

  const getResult = (): string => {
    if (!(operandA && operandB && operator)) {
      return "";
    }
    return eval(`${operandA} ${operator} ${operandB}`);
  };

  return (
    <CardGroup style={{ marginTop: "2rem", alignItems: "center" }}>
      <ResultCell body={operandA} footer="operand-a" />
      <ResultCell body={operator} footer="operator" />
      <ResultCell body={operandB} footer="operand-b" />
      <ResultCell body={getResult()} footer="result" />
    </CardGroup>
  );
};

export default Results;
