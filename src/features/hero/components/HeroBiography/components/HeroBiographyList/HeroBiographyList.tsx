import React from "react";

import { Container } from "./HeroBiographyList.styles";

interface HeroBiographyListProps {
  children?: React.ReactNode;
  title: string;
}
const HeroBiographyList = ({ children, title }: HeroBiographyListProps) => {
  return (
    <Container>
      <h3>{title}</h3>
      <ul>{children}</ul>
    </Container>
  );
};

export default HeroBiographyList;
