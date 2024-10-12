import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import ArrowDownIcon from "../../assets/desktop/icon-arrow-down.svg";

export const ClockSection = styled(motion.section)`
  /* height: ${(props) => (props.$details ? "50%" : "100%")}; */
  padding-block: ${(props) => (props.$details ? "var(--g-lrg-1)" : "0")};
  display: flex;
  align-items: flex-end;

  @media (max-width: 33em) {
    padding-block: ${(props) => (props.$details ? "var(--g-med)" : "0")};
  }
`;

export const GreetingText = styled.p`
  text-transform: uppercase;
  font-size: var(--fs-med-2);
  letter-spacing: var(--ls-std);
  /* font-weight: 300; */
  line-height: var(--lh-std);
  display: flex;
  align-items: center;
  gap: var(--g-std);

  @media (max-width: 48em) {
    font-size: var(--fs-med);
  }

  @media (max-width: 33em) {
    font-size: var(--fs-med-5);
  }
`;

export const Time = styled.time`
  font-size: var(--fs-huge);
  letter-spacing: var(--ls-tight);
  font-weight: 700;
  line-height: 1;
  display: inline-block;
  width: 100%;

  @media (max-width: 48em) {
    font-size: var(--fs-huge-2);
  }

  @media (max-width: 33em) {
    font-size: var(--fs-huge-3);
    letter-spacing: var(--ls-tight-2);
  }
`;

export const TimeZone = styled.span`
  font-size: var(--fs-big);
  line-height: var(--lh-std);
  font-weight: 200;
  letter-spacing: 0;
  @media (max-width: 48em) {
    font-size: var(--fs-big-3);
  }

  @media (max-width: 33em) {
    font-size: var(--fs-med-5);
  }
`;

export const LocationText = styled.p`
  font-size: var(--fs-med-2);
  line-height: var(--lh-std);
  font-weight: 700;
  letter-spacing: var(--ls-std);
  text-transform: uppercase;
  @media (max-width: 48em) {
    font-size: var(--fs-med);
  }

  @media (max-width: 33em) {
    font-size: var(--fs-med-5);
  }
`;

export const ArrowWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;
  background-color: var(--cl-brand);
  border-radius: 50%;
  transition: 0.2s all;

  @media (max-width: 33em) {
    width: 3.2rem;
    height: 3.2rem;
  }

  svg path {
    transition: 0.2s all;
  }
`;

export const ArrowDownComponent = styled(ArrowDownIcon)`
  transition: 0.5s all;
  ${(props) =>
    props.$details &&
    css`
      transform: rotate(180deg);
    `};
`;

export const ClockWrapper = styled.div`
  @media (max-width: 33em) {
    display: grid;
    gap: var(--g-std);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 48em) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) =>
      props.$details ? "calc(var(--g-lrg-3)/2)" : "var(--g-lrg-3)"};
  }

  @media (max-width: 33em) {
    gap: var(--g-lrg-5);
  }
`;

export const GreetingTextSpan = styled.span`
  @media (max-width: 33em) {
    display: none;
  }
`;
