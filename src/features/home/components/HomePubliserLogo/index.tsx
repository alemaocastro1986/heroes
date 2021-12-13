import React from "react";

import { Container } from "./styles";

interface PublisherLogoProps {
  source: string;
  alt: string;
}

export const HomePublisherLogo: React.FC<PublisherLogoProps> = ({
  source,
  alt,
}) => {
  return (
    <Container>
      <img src={source} alt={alt} />
    </Container>
  );
};
