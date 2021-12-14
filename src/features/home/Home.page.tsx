import React from "react";
import { useNavigate } from "react-router-dom";

import { SearchInput } from "../../shared/components/SearchInput";

import { Container } from "./Home.styles";

export const HomePage: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  let navigate = useNavigate();

  async function handleSearchHero() {
    console.log(inputRef.current?.value);
    if (inputRef.current?.value) {
      navigate(`/heroes/${inputRef.current.value}`);
      return;
    }
    navigate(`/heroes/all`);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    handleSearchHero();
  }

  return (
    <Container>
      <main>
        <h1>
          Get your favorite <span>super hero</span> info.
        </h1>
        <form onSubmit={handleSubmit}>
          <SearchInput
            ref={inputRef}
            placeholder="what is your favorite super hero?"
            onClickGo={handleSearchHero}
          />
        </form>
      </main>
    </Container>
  );
};
