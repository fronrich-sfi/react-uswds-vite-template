import { Card, CardBody, CardFooter } from "@trussworks/react-uswds";
import { FC } from "react";

interface ResultCellProps {
  body: string;
  footer: string;
}
const ResultCell: FC<ResultCellProps> = ({ body, footer }) => {
  return (
    <Card>
      <CardBody>
        <h1 style={{ textAlign: "center" }}>{body}</h1>
      </CardBody>
      <CardFooter>
        <span>{footer}</span>
      </CardFooter>
    </Card>
  );
};

export default ResultCell;
