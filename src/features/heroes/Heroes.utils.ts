import { HeroInfo } from "../../shared/contexts/HeroesContext";

export function filterByCodename(
  codename: string,
  heroes: HeroInfo[]
): HeroInfo[] {
  const formattedCodename = codename.toLowerCase();
  if (formattedCodename === "all") {
    return heroes;
  }

  function nameIncludes(hero: HeroInfo): boolean {
    return hero.name.toLowerCase().includes(formattedCodename);
  }

  function fullNameIncludes(hero: HeroInfo): boolean {
    return hero.biography.fullName.toLowerCase().includes(formattedCodename);
  }

  function aliasesContains(hero: HeroInfo): boolean {
    return hero.biography.aliases
      .map((al) => al.toLowerCase())
      .includes(formattedCodename);
  }

  return heroes.filter((hero) => nameIncludes(hero) || fullNameIncludes(hero));
}
