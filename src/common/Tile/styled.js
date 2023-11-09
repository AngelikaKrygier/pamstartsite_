import styled, { css } from "styled-components";
import { ReactComponent as VectorDown } from "../../images/vectorDown.svg";
import { ReactComponent as VectorUp } from "../../images/vectorUp.svg";

export const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const TileHeader = styled.h2`
  font-size: 14px;
  font-weight: 500;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 0;
  padding: 8px;
  border-radius: 4px;
  background-image: linear-gradient(
    95deg,
    rgba(0, 0, 0, 1) 3%,
    rgba(45, 44, 44, 1) 86%
  );
  color: ${({ theme }) => theme.colors.white};
`;

export const List = styled.ul`
  margin: 0;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  -webkit-box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  -moz-box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  box-shadow: 1px 2px 24px -16px rgba(66, 68, 90, 1);
  overflow: scroll;
  overflow-x: hidden;
`;

export const ListItem = styled.li`
  padding: 5px 15px 5px 5px;
  font-size: 13px;
  display: grid;
  align-items: center;
  grid-gap: 15px;
  grid-template-columns: auto auto 1fr;

  ${({ changeLog }) =>
    changeLog &&
    css`
      align-items: start;
    `};
`;

export const ListItemDescription = styled.p`
padding: 0;
margin: 0;
`;

export const ItemDate = styled.span`
  font-size: 12px;
  justify-self: end;
  font-style: italic;
  color: ${({ theme }) => theme.colors.shadyLady};
`;

export const ExeVersion = styled.span`
  font-size: 12px;
  justify-self: end;
  font-style: italic;
  color: ${({ theme }) => theme.colors.shadyLady};
`;

export const ListItemContent = styled.p`
  margin: 0;
  text-align: justify;
  grid-column: span 3;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.shadyLady};
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 12px;
  justify-self: end;
  color: ${({ theme }) => theme.colors.seance};

  &:hover {
    cursor: pointer;
    font-weight: 700;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.codGrey};
  }
`;

export const StyledVectorDown = styled(VectorDown)`
  cursor: pointer;
  width: 10px;
`;

export const StyledVectorUp = styled(VectorUp)`
  cursor: pointer;
  width: 10px;
`;
