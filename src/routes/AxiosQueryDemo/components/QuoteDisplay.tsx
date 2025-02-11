import { Button, CardGroup } from "@trussworks/react-uswds";
import useRHFSubscription from "../../../hooks/ReactHookForm/useRFHSubscription";
import useRandomQuotes from "../../../hooks/Tanstack/queries/useRandomQuotes";
import { Icon } from "@iconify/react";
import Tags from "./Tags";
import QuoteCard from "./QuoteCard";

const QuoteDisplay = () => {
  const numQuotes: number = useRHFSubscription("num-quotes");
  const tags: string[] = useRHFSubscription("tags");
  const { data, isLoading, refetch } = useRandomQuotes({ numQuotes, tags });

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
      <Button onClick={() => refetch()}>Refresh</Button>
      <Tags tags={tags} />
      <CardGroup>
        {data?.map((quote) => (
          <QuoteCard quote={quote} />
        ))}
      </CardGroup>
    </>
  );
};

export default QuoteDisplay;
