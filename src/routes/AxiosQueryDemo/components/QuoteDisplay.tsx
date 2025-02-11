import { Card, CardBody, CardFooter, CardGroup } from "@trussworks/react-uswds";
import useRHFSubscription from "../../../hooks/ReactHookForm/useRFHSubscription";
import useRandomQuotes from "../../../hooks/Tanstack/queries/useRandomQuotes";
import { Icon } from "@iconify/react";

const QuoteDisplay = () => {
  const numQuotes = useRHFSubscription("num-quotes");
  const { data, isLoading } = useRandomQuotes({ numQuotes });

  if (isLoading) {
    return (
      <h2>
        Loading <Icon icon="svg-spinners:ring-resize" />
      </h2>
    );
  }

  return (
    <>
      <h2>Showing {numQuotes} Quotes</h2>
      <CardGroup>
        {data?.map((quote) => (
          <Card>
            <CardBody>
              <i>{quote.content}</i>
            </CardBody>
            <CardFooter>-{quote.author}</CardFooter>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default QuoteDisplay;
