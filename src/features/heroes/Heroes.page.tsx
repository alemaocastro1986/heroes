import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HeroInfo } from "../../shared/contexts/HeroesContext";
import { useHeroes } from "../../shared/hooks/useHeroes";
import { filterByCodename } from "./Heroes.utils";

import { Container, HeroesList } from "./Heroes.styles";
import HeroesListItem from "./components/HeroesListItem/HeroesListItem";
import NoResults from "./components/NoResults";

export const HeroesPage = () => {
  let { codename } = useParams<{ codename: string }>();
  let navigate = useNavigate();
  const { heroes } = useHeroes();
  const [searchedHeroes, setSearchedHeroes] = React.useState<HeroInfo[]>([]);

  React.useEffect(() => {
    if (heroes) {
      if (codename && codename !== "all") {
        const formattedCodename = codename.toLowerCase();

        setSearchedHeroes(filterByCodename(formattedCodename, heroes));
      } else {
        setSearchedHeroes(heroes);
      }
    }
  }, [codename, heroes]);

  function navigateToDetails(id: number) {
    navigate(`/hero/${id}`);
  }

  return (
    <Container>
      <main>
        <h1>
          Results by: <span>{codename}</span>
        </h1>

        {searchedHeroes.length <= 0 && <NoResults />}
        <HeroesList>
          {searchedHeroes.map((hero) => (
            <HeroesListItem
              key={hero.id}
              imageBackground={hero.images.lg}
              codename={hero.name}
              secretName={hero.biography.fullName}
              onClick={() => navigateToDetails(hero.id)}
            />
          ))}
        </HeroesList>
      </main>
    </Container>
  );
};
