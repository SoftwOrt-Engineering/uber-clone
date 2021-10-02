import { Favorites } from "../../src/slices/nav/types";

export const favoritesData = (): Favorites[] => {
  const favs: Favorites[] = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Forstenrieder Allee 112, München, Germany",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "Hansastraße 19, München, Germany",
    },
  ];

  return favs;
};
