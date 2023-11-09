import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto minmax(0, 1fr);
  max-height: 100vh;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.whiteLilac};
`;
