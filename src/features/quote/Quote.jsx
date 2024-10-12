import Container from "../../shared/components/Container";
import Skeleton from "react-loading-skeleton";
import { queryClient } from "../../main";
import useErrorNotification from "../../hooks/useErrorNotification";
import useQuoteQuery from "../../hooks/useQuoteQuery";
import {
  BlockQuote,
  IconRefreshComponent,
  QuoteAuthor,
  QuoteSection,
  QuoteText,
} from "./quoteStyles";

const quoteSectionVariants = {
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.5,
    },
  },
};

export default function Quote() {
  const { quote, isQuotePending, isQuoteSuccess, quoteError } = useQuoteQuery();

  useErrorNotification(quoteError);

  function onRefreshClick() {
    queryClient.invalidateQueries({ queryKey: ["quote"] });
  }

  return (
    <QuoteSection
      animate="visible"
      initial="hidden"
      exit="hidden"
      variants={quoteSectionVariants}
    >
      <Container>
        <BlockQuote>
          <QuoteText>
            {isQuoteSuccess && quote.quote}
            {(isQuotePending || quoteError) && <Skeleton count={2.5} />}
          </QuoteText>

          {isQuoteSuccess && <IconRefreshComponent onClick={onRefreshClick} />}
          {(isQuotePending || quoteError) && (
            <Skeleton circle count={1} width={"1.8rem"} height={"1.8rem"} />
          )}

          <QuoteAuthor>
            {isQuotePending || quoteError ? (
              <Skeleton width={"10rem"} />
            ) : (
              quote.author
            )}
          </QuoteAuthor>
        </BlockQuote>
      </Container>
    </QuoteSection>
  );
}
