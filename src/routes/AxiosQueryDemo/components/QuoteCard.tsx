import { FC } from "react";
import { Card, CardBody, CardFooter } from "@trussworks/react-uswds";
import Quote from "../../../types/Quote";

interface QuoteCardProps {
  quote: Quote;
}

const QuoteCard: FC<QuoteCardProps> = ({ quote }) => {
  return (
    <Card>
      <CardBody>
        <i>{quote.content}</i>
      </CardBody>
      <CardFooter>-{quote.author}</CardFooter>
    </Card>
  );
};

export default QuoteCard;
