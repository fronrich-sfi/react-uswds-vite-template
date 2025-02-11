import { useQuery } from "@tanstack/react-query";
import useExampleServices from "../../services/useExampleServices";

interface UseRandomQuoteProps {
  numQuotes: number;
  tags?: string[];
}

const useRandomQuotes = ({ numQuotes, tags }: UseRandomQuoteProps) => {
  // Always remember to grab the serviceQueryKey along with the
  // method you want to query
  const { serviceQueryKey, getRandomQuotes } = useExampleServices();

  // You'll most likely only need these returns from the query,
  // but more exist in documentation
  const {
    // default value of data
    data = [],
    isLoading,
    status,
    refetch,
  } = useQuery({
    queryKey: [serviceQueryKey, "get-random-quotes", numQuotes, tags],

    queryFn: () => getRandomQuotes({ numQuotes, tags }),

    // make sure that the query is only enabled if numQuotes
    // is defined and > 0
    enabled: !!numQuotes,
  });

  return { data, isLoading, status, refetch };
};

export default useRandomQuotes;
