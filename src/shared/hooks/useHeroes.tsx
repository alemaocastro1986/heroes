import React from "react";
import { HeroesContextData, HeroesContext } from "../contexts/HeroesContext";
export function useHeroes(): HeroesContextData {
  const context = React.useContext(HeroesContext);
  if (!context) {
    throw new Error(`No provider is provided!`);
  }
  return context;
}
