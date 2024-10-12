import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: calc(var(--c-size) + 2 * var(--c-pad));
  margin: 0 auto;
  padding: 0 var(--c-pad);
`;

export default function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}
