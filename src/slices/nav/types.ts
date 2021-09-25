export type NavState = {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
};

export type NavOptionEntry = {
  id: string;
  title: string;
  image: string;
  screen: string;
};
