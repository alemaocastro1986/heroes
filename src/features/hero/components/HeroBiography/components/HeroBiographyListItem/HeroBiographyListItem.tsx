import React from "react";

import { Container } from "./HeroBiographyListItem.styles";

interface HeroBiographyListItemProps {
  title: string;
  content: any;
}
const HeroBiographyListItem = ({
  title,
  content,
}: HeroBiographyListItemProps) => {
  return (
    <Container>
      <strong>{title}</strong>
      <span>{content}</span>
    </Container>
  );
};

export default HeroBiographyListItem;
