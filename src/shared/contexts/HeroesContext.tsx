import React from "react";
import { HttpClient } from "../services/HttpClient";

export type HeroInfo = {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
    height: [string, string];
    weight: [string, string];
    eyeColor: string;
    hairColor: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
};

export type HeroesContextData = {
  heroes: HeroInfo[];
  getHeroById: (id: number) => HeroInfo | undefined;
};

export const HeroesContext = React.createContext<HeroesContextData>(
  {} as HeroesContextData
);

interface HeroProviderProps {
  children: React.ReactNode;
}

export const HeroesProvider = ({ children }: HeroProviderProps) => {
  const [heroes, setHeroes] = React.useState<HeroInfo[]>([]);
  const heroesData = React.useRef<HeroInfo[]>([]);

  React.useEffect(() => {
    HttpClient.get<HeroInfo[]>(`all.json`).then((res) => {
      const { data } = res;
      setHeroes(data);
      heroesData.current = data;
    });
  }, []);

  function getHeroById(id: number): HeroInfo | undefined {
    return heroes.find((hero) => hero.id === id);
  }

  return (
    <HeroesContext.Provider value={{ heroes, getHeroById }}>
      {children}
    </HeroesContext.Provider>
  );
};
