import { useQuery } from "@tanstack/react-query";
import { fetchAdvice } from "../api/advice";

export default function useQuoteQuery() {
  const {
    data: quote,
    isPending: isQuotePending,
    isSuccess: isQuoteSuccess,
    error: quoteError,
  } = useQuery({
    queryKey: ["quote"],
    queryFn: fetchAdvice,
  });

  return { quote, isQuotePending, isQuoteSuccess, quoteError };
}
