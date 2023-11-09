import styled, { css } from "styled-components";

export const Section = styled.section`
  display: grid;
  padding: 15px;
  min-width: 40vw;
  grid-template-rows: minmax(0, auto) minmax(0, auto);
  height: 97%;
  grid-gap: 15px;

  ${({ changeLog }) =>
    changeLog &&
    css`
      grid-template-rows: minmax(0, 1fr);
    `};
`;
