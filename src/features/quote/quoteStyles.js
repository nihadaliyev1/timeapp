import styled from "styled-components";
import { motion } from "framer-motion";
import IconRefresh from "../../assets/desktop/icon-refresh.svg";

export const QuoteSection = styled(motion.section)``;

export const BlockQuote = styled.blockquote`
  font-size: var(--fs-med);
  line-height: var(--lh-std);
  display: grid;
  grid-template-columns: minmax(auto, 54rem) min-content;
  max-width: 57rem;
  column-gap: var(--g-std);

  @media (max-width: 33em) {
    font-size: var(--fs-sml);
    line-height: var(--lh-med);
    grid-template-columns: minmax(auto, 30rem) min-content;
  }
`;

export const QuoteText = styled.p`
  margin-bottom: var(--g-std);
`;

export const QuoteAuthor = styled.cite`
  font-weight: 700;
  font-style: normal;
  width: 100%;
`;

export const IconRefreshComponent = styled(IconRefresh)`
  margin-top: var(--g-sml);
  /* align-self: center; */
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    transform: rotate(180deg);
    path {
      transition: 0.5s all;
      opacity: 1;
    }
  }
`;
