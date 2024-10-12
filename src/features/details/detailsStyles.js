import styled from "styled-components";
import { motion } from "framer-motion";

export const DetailsSection = styled(motion.section)`
  display: flex;
  align-items: center;
  backdrop-filter: blur(1rem);
  background-color: ${(props) =>
    props.$isDarkTime ? "rgba(0,0,0,0.75)" : "rgba(255, 255, 255, 0.75)"};
`;

export const DescriptionList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  max-width: 85rem;
  padding-block: 7.4rem;

  /* justify-content: space-between; */
  row-gap: var(--g-med);
  position: relative;
  justify-content: space-between;

  color: ${(props) =>
    props.$isDarkTime ? "var(--cl-white)" : "var(--cl-brand)"};

  @media (max-width: 48em) {
    max-width: 54rem;
  }

  @media (max-width: 33em) {
    grid-template-columns: 1fr;
    padding-block: 4.8rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: 65%;
    top: 50%;
    width: 1px;
    height: 65%;
    background-color: #979797;
    transform: translate(-50%, -50%);
    z-index: 100;

    @media (max-width: 48em) {
      display: none;
    }
  }
`;

export const DescriptionTerm = styled.dt`
  font-size: var(--fs-med-5);
  line-height: var(--lh-std);
  letter-spacing: var(--ls-std);
  text-transform: uppercase;

  @media (max-width: 48em) {
    font-size: var(--fs-med-6);
  }

  @media (max-width: 33em) {
    font-size: var(--fs-sml-2);
  }
`;

export const DescriptionText = styled.dd`
  font-size: var(--fs-big-2);
  font-weight: 700;

  @media (max-width: 48em) {
    font-size: var(--fs-big);
  }

  @media (max-width: 33em) {
    font-size: var(--fs-med-7);
  }
`;

export const DescriptionWrapper = styled.div`
  display: grid;
  gap: var(--g-sml);

  @media (max-width: 33em) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
