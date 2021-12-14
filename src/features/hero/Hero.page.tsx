import React from "react";

// import { Container } from './styles';
import { useParams } from "react-router-dom";
import { HeroInfo } from "../../shared/contexts/HeroesContext";
import { useHeroes } from "../../shared/hooks/useHeroes";
import HeroBiography from "./components/HeroBiography/HeroBiography";
import HeroPowerStatus from "./components/HeroPowerStatus/HeroPowerStatus";
import { Container, Image, Name, WrapperContainer } from "./Hero.styles";

const HeroPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hero, setHero] = React.useState<HeroInfo | null>(null);
  const { getHeroById } = useHeroes();

  React.useEffect(() => {
    const data = getHeroById(Number(id));
    if (data) {
      setHero(data);
    }
  }, [getHeroById, id]);

  if (!hero) {
    return <p>Loading...</p>;
  }

  return (
    <WrapperContainer>
      <Container>
        <Name>
          <small>{hero.biography.fullName}</small>
          <strong>{hero.name}</strong>
        </Name>
        <Image>
          <img src={hero.images.md} alt={hero.name} />
        </Image>
        <HeroPowerStatus powerstats={hero.powerstats} />
        <HeroBiography
          appearance={hero.appearance}
          biography={hero.biography}
          work={hero.work}
        />
      </Container>
    </WrapperContainer>
  );
};

export default HeroPage;
