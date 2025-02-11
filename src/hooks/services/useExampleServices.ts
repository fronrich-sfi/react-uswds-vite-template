import axios from "axios";
import Quote from "../../types/Quote";

/**
 * A sample service hook
 * define services as hooks for easy usage
 * @returns
 */
const useExampleServices = () => {
  /**
   * To better control tanstack-query, the hook provides a service key
   * that should be added as the first query key in the query key array.
   * This allows queries that use the methods within this hook to be referenced
   * and manipulated at the same time if needed.
   */
  const serviceQueryKey = "example";

  interface GetRandomQuotesProps {
    numQuotes: number;
  }

  /**
   * get a set number of random quotes
   * @param param0
   * @returns
   */
  const getRandomQuotes = async ({
    numQuotes,
  }: GetRandomQuotesProps): Promise<Quote[]> => {
    return (
      await axios.get(
        `https://api.quotable.io/quotes/random?limit=${numQuotes}`
      )
    ).data;
  };

  return { serviceQueryKey, getRandomQuotes };
};

export default useExampleServices;
