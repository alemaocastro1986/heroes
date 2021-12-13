import React from "react";

import SearchInput from "../../shared/components/SearchInput";

import { Container } from "./Home.styles";

export const HomePage: React.FC = () => {
  return (
    <Container>
      <main>
        <h1>
          Get your favorite <span>super hero</span> info.
        </h1>
        <SearchInput placeholder="what is your favorite super hero?" />
      </main>
    </Container>
  );
};
