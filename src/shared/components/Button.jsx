import styled from "styled-components";

const ButtonComponent = styled.button`
  background-color: var(--cl-white);
  color: rgba(0, 0, 0, 0.5);
  font-size: var(--fs-med-4);
  padding: 0.8rem 0.9rem 0.8rem 2.1rem;
  letter-spacing: var(--ls-std);
  border-radius: var(--rad-std);
  font-family: inherit;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s all;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  @media (max-width: 33em) {
    font-size: var(--fs-sml);
    padding: 0.4rem 0.5rem 0.4rem 1.7rem;
  }

  &:hover {
    background-color: var(--cl-brand);
    color: var(--cl-white);

    span {
      background-color: var(--cl-white);

      svg path {
        stroke: var(--cl-brand);
      }
    }
  }
`;

export default function Button({ children, onClick }) {
  return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>;
}
