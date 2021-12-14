import React from "react";

import { Container } from "./HeroesListItem.styles";

interface HeroesListItemProps {
  imageBackground: string;
  codename: string;
  secretName: string;
  onClick?: () => void;
}

const HeroesListItem = ({
  imageBackground,
  codename,
  secretName,
  onClick,
}: HeroesListItemProps) => {
  return (
    <Container imgBg={imageBackground} onClick={onClick}>
      <div></div>

      <strong>{codename}</strong>
      <small>{secretName}</small>
    </Container>
  );
};

export default HeroesListItem;
