import { NavOptionEntry } from "../../src/slices/nav/types";

export const screenData = (): NavOptionEntry[] => {
  const data: NavOptionEntry[] = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Order Food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];
  return data;
};
