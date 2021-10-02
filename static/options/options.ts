import { UberOptions } from "../../src/slices/nav/types";

export const driverOptions = (): UberOptions[] => {
  const opts: UberOptions[] = [
    {
      id: "Uber-X-123",
      title: "Uber X",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    },
  ];

  return opts;
};
