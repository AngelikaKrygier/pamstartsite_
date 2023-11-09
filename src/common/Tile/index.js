import React, { useState } from "react";
import format from "date-fns/format";
import {
  List,
  Link,
  ListItem,
  ListItemContent,
  ListItemDescription,
  StyledTile,
  StyledVectorDown,
  StyledVectorUp,
  ItemDate,
  ExeVersion,
  TileHeader,
} from "./styled";

export const Tile = ({ list, tileHeader, changeLog }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <StyledTile>
      <TileHeader>{tileHeader}</TileHeader>
      {changeLog ? (
        <List>
          {list.flatMap((list) => {
            const items = [
              ...list.features,
              ...list.bugfixs,
              ...list.others,
            ].sort((a, b) => new Date(b.date) - new Date(a.date));

            return items.map((item) => {
              return (
                <ListItem key={item.id} changeLog={changeLog}>
                  <ItemDate>
                    {format(new Date(item.date), "yyyy-MM-dd")}
                  </ItemDate>
                  <ListItemDescription>{item.description}</ListItemDescription>
                  <ExeVersion>{`[${list.pamBuildVersion}]`}</ExeVersion>
                </ListItem>
              );
            });
          })}
        </List>
      ) : (
        <List>
          {list.map((item, index) => (
            <ListItem key={item.id}>
              {openItem === index ? (
                <>
                  <StyledVectorUp onClick={() => toggleItem(index)} />
                  <ListItemDescription>{item.name}</ListItemDescription>
                  <Link href={item.link}>Zobacz szczegóły</Link>
                  <ListItemContent>{item.description}</ListItemContent>
                </>
              ) : (
                <>
                  <StyledVectorDown onClick={() => toggleItem(index)} />
                  <ListItemDescription>{item.name}</ListItemDescription>
                  <Link href={item.link}>Zobacz szczegóły</Link>
                </>
              )}
            </ListItem>
          ))}
        </List>
      )}
    </StyledTile>
  );
};
